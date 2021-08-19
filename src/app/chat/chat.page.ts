import { Component, OnInit, ViewChild } from '@angular/core';
import { Chat } from 'src/models/chat.models';
import { Router } from '@angular/router';
import { UiElementsService } from '../services/common/ui-elements.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/models/user.models';
import { Helper } from 'src/models/helper.models';
import { Message } from 'src/models/message.models';
import { Constants } from 'src/models/constants.models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from '../services/network/api.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  @ViewChild("myContent", { static: true }) myContent: any;
  userMe: User;
  chatChild: string;
  userPlayerId: string;
  newMessageText: string;
  chatRef: firebase.database.Reference;
  inboxRef: firebase.database.Reference;
  messages = new Array<Message>();
  chatObj = new Chat();
  private doctor_user: User;

  constructor(private router: Router, private uiElementService: UiElementsService,
    private translate: TranslateService, private iab: InAppBrowser, private apiService: ApiService) {}

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.chatObj = this.router.getCurrentNavigation().extras.state.chat;
      this.doctor_user = this.router.getCurrentNavigation().extras.state.doctor_user;

      this.userMe = this.apiService.getUserMe();
      this.chatChild = Helper.getChatChild(this.chatObj.myId, this.chatObj.chatId);

      const component = this;
      this.inboxRef = firebase.database().ref(Constants.REF_INBOX);
      this.chatRef = firebase.database().ref(Constants.REF_CHAT);
      this.chatRef.child(this.chatChild).limitToLast(20).on("child_added", function (snapshot, prevChildKey) {
        var newMessage = snapshot.val() as Message;
        if (newMessage) {
          newMessage.timeDiff = Helper.formatMillisDateTimeWOYear(Number(newMessage.dateTimeStamp), Helper.getLocale());
          component.addMessage(newMessage);
          component.markDelivered();
          component.scrollList();
        }
      }, function (error) {
        console.error("child_added", error);
      });

      firebase.database().ref(Constants.REF_USERS_FCM_IDS).child(this.chatObj.chatId).once("value", function (snap) {
        component.userPlayerId = snap.val();
      });

      this.translate.get("just_moment").subscribe(value => this.uiElementService.presentToast(value));

    }
  }

  scrollList() {
    this.myContent.scrollToBottom(300);
  }

  markDelivered() {
    if (this.messages && this.messages.length) {
      if (this.messages[this.messages.length - 1].senderId != this.chatObj.myId) {
        this.messages[this.messages.length - 1].delivered = true;
        this.chatRef.child(this.chatChild).child(this.messages[this.messages.length - 1].id).child("delivered").set(true);
      }
      // else {
      //   let toNotify;
      //   if (!this.messages[this.messages.length - 1].delivered) {
      //     toNotify = this.messages[this.messages.length - 1];
      //     this.messages[this.messages.length - 1].delivered = true;
      //   }
      //   if (toNotify) {
      //     this.notifyMessages(toNotify);
      //   }
      // }
    }
  }

  addMessage(msg: Message) {
    this.messages = this.messages.concat(msg);
    //this.storage.set(Constants.KEY_MESSAGES + this.chatChild, this.messages);
    if (this.chatObj && msg) {
      let isMeSender = msg.senderId == this.chatObj.myId;
      this.chatObj.chatImage = isMeSender ? msg.recipientImage : msg.senderImage;
      this.chatObj.chatName = isMeSender ? msg.recipientName : msg.senderName;
      //this.chatObj.chatStatus = isMeSender ? msg.recipientStatus : msg.senderStatus;
    }
  }

  send() {
    if (this.newMessageText && this.newMessageText.trim().length) {
      let toSend = new Message();
      toSend.chatId = this.chatChild;
      toSend.body = this.newMessageText;
      toSend.dateTimeStamp = String(new Date().getTime());
      toSend.delivered = false;
      toSend.sent = true;
      toSend.recipientId = this.chatObj.chatId;
      toSend.recipientImage = this.chatObj.chatImage;
      toSend.recipientName = this.chatObj.chatName;
      toSend.recipientStatus = this.chatObj.chatStatus;
      toSend.senderId = this.chatObj.myId;
      toSend.senderName = this.userMe.name;
      toSend.senderImage = (this.userMe.image_url && this.userMe.image_url.length) ? this.userMe.image_url : "assets/images/empty_dp.png";
      toSend.senderStatus = this.userMe.email;
      toSend.id = this.chatRef.child(this.chatChild).push().key;

      this.chatRef.child(this.chatChild).child(toSend.id).set(toSend).then(res => {
        this.inboxRef.child(toSend.recipientId).child(toSend.senderId).set(toSend);
        this.inboxRef.child(toSend.senderId).child(toSend.recipientId).set(toSend);
        this.newMessageText = '';
        this.notifyMessages();
      });
    } else {
      this.translate.get("type_message").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  dialDoctor() {
    this.iab.create((("https://api.whatsapp.com/send?phone=" + this.doctor_user.mobile_number)), "_system");
  }

  private notifyMessages() {
    this.apiService.postNotification(Constants.ROLE_DOCTOR, Number(this.chatObj.chatId) ? this.chatObj.chatId : this.chatObj.chatId.substring(0, this.chatObj.chatId.indexOf(Constants.ROLE_DOCTOR))).subscribe(res => console.log("notiS", res), err => console.log("notiF", err));
  }

}
