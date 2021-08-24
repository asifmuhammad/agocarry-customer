import { Injectable } from '@angular/core';
import { Product } from 'src/models/models-shop-hour/product.models';
import { Helper } from 'src/models/models-shop-hour/helper.models';
import { MyAddress } from 'src/models/models-shop-hour/address.models';
import { OrderRequest } from 'src/models/models-shop-hour/order-request.models';
import { PaymentMethod } from 'src/models/models-shop-hour/payment-method.models';
import { Coupon } from 'src/models/models-shop-hour/coupon.models';

export class CartItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  priceToShow: string;
  quantity: number;
  total: number;
  product: any;

  setQuantity(newQuantity: number) {
    this.quantity = newQuantity;
    this.total = this.price * this.quantity;
  }

  getTotal(fixFloatingPoint: boolean): number {
    return fixFloatingPoint ? Number(this.total.toFixed(2)) : this.total;
  }

  static fromSaved(savedCartItem: CartItem): CartItem {
    let toReturn = new CartItem();
    toReturn.id = savedCartItem.id;
    toReturn.title = savedCartItem.title;
    toReturn.subtitle = savedCartItem.subtitle;
    toReturn.image = savedCartItem.image;
    toReturn.price = savedCartItem.price;
    toReturn.priceToShow = savedCartItem.priceToShow;
    toReturn.quantity = savedCartItem.quantity;
    toReturn.total = savedCartItem.total;
    toReturn.product = savedCartItem.product;
    return toReturn;
  }
}

export class ExtraCharge {
  id: string;
  title: string;
  price: number;
  isPercent: boolean;
  priceToShow: string;
  extraChargeObject: any;
}

export class Cart {
  static KEY_CART: string = 'sh_cart';

  cartItems: Array<CartItem>;
  extraCharges: Array<ExtraCharge>;

  static restore(): Cart {
    let toReturn = new Cart();
    toReturn.cartItems = new Array<CartItem>();
    toReturn.extraCharges = new Array<ExtraCharge>();

    let savedCart = Cart.getSavedCart();
    if (savedCart) {
      if (savedCart.extraCharges && savedCart.extraCharges.length) toReturn.extraCharges = savedCart.extraCharges;
      if (savedCart.cartItems && savedCart.cartItems.length) for (let sCi of savedCart.cartItems) toReturn.cartItems.push(CartItem.fromSaved(sCi));
    }

    return toReturn;
  }

  removeExtraCharge(extraChargeId: string) {
    let currIndex = -1;
    for (let i = 0; i < this.extraCharges.length; i++) {
      if (this.extraCharges[i].id == extraChargeId) {
        currIndex = i;
        break;
      }
    }
    if (currIndex != -1) this.extraCharges.splice(currIndex, 1);
  }

  addExtraCharge(extraCharge: ExtraCharge) {
    this.extraCharges.push(extraCharge);
  }

  getTotalCartItems(fixFloatingPoint: boolean): number {
    let toReturn = 0;
    for (let ci of this.cartItems) toReturn += ci.total;
    return fixFloatingPoint ? Number(toReturn.toFixed(2)) : toReturn;
  }

  getTotalCart(fixFloatingPoint: boolean): number {
    let subTotal = this.getTotalCartItems(false);

    let tax_in_percent = 0;
    for (let ec of this.extraCharges) {
      if (ec.id == "tax_in_percent") {
        tax_in_percent = ec.isPercent ? ((subTotal * ec.price) / 100) : (ec.price);
        break;
      }
    }

    let delivery_fee = 0;
    for (let ec of this.extraCharges) {
      if (ec.id == "delivery_fee") {
        delivery_fee = ec.price;
        break;
      }
    }

    let coupon = 0;
    for (let ec of this.extraCharges) {
      if (ec.id == "coupon") {
        coupon = ec.isPercent ? ((subTotal * ec.price) / 100) : (ec.price);
        break;
      }
    }

    let toReturn = subTotal + tax_in_percent + delivery_fee - coupon;
    return fixFloatingPoint ? Number(toReturn.toFixed(2)) : toReturn;
  }

  static getSavedCart(): Cart {
    return JSON.parse(window.localStorage.getItem(Cart.KEY_CART));
  }

  static setSavedCart(cartToSave: Cart) {
    window.localStorage.setItem(Cart.KEY_CART, JSON.stringify(cartToSave));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  private myCart: Cart;
  private orderRequest: OrderRequest;
  private orderMeta: any;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.myCart = Cart.restore();

    let tax_in_percent = Helper.getSetting("tax_in_percent");
    let delivery_fee = Helper.getSetting("delivery_fee");
    let currency_icon = Helper.getSetting("currency_icon");

    this.myCart.removeExtraCharge("delivery_fee");
    this.myCart.removeExtraCharge("tax_in_percent");
    if (tax_in_percent != null && Number(tax_in_percent) > 0) {
      let ec = new ExtraCharge();
      ec.extraChargeObject = tax_in_percent;
      ec.id = "tax_in_percent";
      ec.title = "Service Fee";
      ec.isPercent = true;
      ec.price = Number(tax_in_percent);
      ec.priceToShow = ec.price + "%";
      this.myCart.addExtraCharge(ec);
    }
    if (delivery_fee != null && Number(delivery_fee) > 0) {
      let ec = new ExtraCharge();
      ec.extraChargeObject = delivery_fee;
      ec.id = "delivery_fee";
      ec.title = "Delivery Fee";
      ec.isPercent = false;
      ec.price = Number(delivery_fee);
      ec.priceToShow = currency_icon + ec.price;
      this.myCart.addExtraCharge(ec);
    }
  }

  clearCart() {
    Cart.setSavedCart(null);
    this.initialize();
    this.orderMeta = null;
    this.orderRequest = null;
  }

  getCartItems(): Array<CartItem> {
    return this.myCart.cartItems;
  }

  getExtraCharges(): Array<ExtraCharge> {
    return this.myCart.extraCharges;
  }

  getCartItemsCount(): number {
    return this.myCart.cartItems.length;
  }

  getCartItemsTotal(fixFloatingPoint: boolean): number {
    return this.myCart.getTotalCartItems(fixFloatingPoint);
  }

  getCartTotal(fixFloatingPoint: boolean): number {
    return this.myCart.getTotalCart(fixFloatingPoint);
  }

  isExistsCartItem(ci: CartItem): boolean {
    let index = -1;
    for (let i = 0; i < this.myCart.cartItems.length; i++) {
      if (this.myCart.cartItems[i].id == ci.id) {
        index = i;
        break;
      }
    }
    return index != -1;
  }

  addOrIncrementCartItem(ci: CartItem): boolean {
    let index = -1;
    for (let i = 0; i < this.myCart.cartItems.length; i++) {
      if (this.myCart.cartItems[i].id == ci.id) {
        index = i;
        break;
      }
    }
    if (index == -1) {
      this.myCart.cartItems.push(ci);
    } else {
      ci.setQuantity(this.myCart.cartItems[index].quantity + 1);
      this.myCart.cartItems[index] = ci;
    }
    Cart.setSavedCart(this.myCart);
    return index == -1;
  }

  removeOrDecrementCartItem(ci: CartItem): boolean {
    let index = -1;
    for (let i = 0; i < this.myCart.cartItems.length; i++) {
      if (this.myCart.cartItems[i].id == ci.id) {
        index = i;
        break;
      }
    }
    let removed = false;
    if (index != -1) {
      if (this.myCart.cartItems[index].quantity > 1) {
        ci.setQuantity(this.myCart.cartItems[index].quantity - 1);
        this.myCart.cartItems[index] = ci;
      } else {
        removed = true;
        this.myCart.cartItems.splice(index, 1);
      }
      Cart.setSavedCart(this.myCart);
    }
    return removed;
  }

  //custom IMPLEMENTATION below.

  removeCoupon() {
    this.myCart.removeExtraCharge("coupon");
  }

  //custom COUPON implementation below

  applyCoupon(coupon: Coupon) {
    this.myCart.removeExtraCharge("coupon");

    if (coupon != null) {
      let ec = new ExtraCharge();
      ec.extraChargeObject = coupon;
      ec.id = "coupon";
      ec.title = coupon.title;
      ec.isPercent = coupon.type == "percent";
      ec.price = Number(coupon.reward);
      ec.priceToShow = ec.price + "%";

      this.myCart.addExtraCharge(ec);

      this.setupOrderRequestBase();
      this.orderRequest.coupon_code = coupon.code;
    } else {
      this.setupOrderRequestBase();
      this.orderRequest.coupon_code = null;
    }
  }

  //custom PRODUCT implementation below

  getCartItemFromProduct(product: Product): CartItem {
    let ci = new CartItem();
    ci.price = product.price;
    ci.title = product.title;
    ci.subtitle = product.categories[0].title;
    ci.image = product.images[0];
    ci.product = product;
    ci.id = String(product.id);
    ci.setQuantity(1);
    return ci;
  }

  //custom ORDERREQUEST implementation below

  getOrderRequest(): OrderRequest {
    this.orderRequest.products = [];
    for (let ci of this.myCart.cartItems) this.orderRequest.products.push({ id: ci.product.id, quantity: ci.quantity });
    if (this.orderMeta != null) this.orderRequest.meta = JSON.stringify(this.orderMeta);
    return this.orderRequest;
  }

  setupOrderRequestBase() {
    if (this.orderRequest == null) this.orderRequest = new OrderRequest();
    if (this.orderMeta == null) this.orderMeta = {};
  }

  setupOrderRequestAddress(address: MyAddress) {
    this.setupOrderRequestBase();
    this.orderRequest.address_id = address.id;
  }

  setupOrderRequestPaymentMethod(paymentMethod: PaymentMethod) {
    this.setupOrderRequestBase();
    this.orderRequest.payment_method_id = paymentMethod.id;
    this.orderRequest.payment_method_slug = paymentMethod.slug;
  }

  setupOrderRequestMeta(key: string, value: string) {
    this.setupOrderRequestBase();
    this.orderMeta[key] = value;
  }

  hasOrderRequestMetaKey(key: string): boolean {
    this.setupOrderRequestBase();
    return this.orderMeta[key] != null;
  }

  removeOrderRequestMeta(key: string) {
    this.setupOrderRequestBase();
    this.orderMeta[key] = null;
  }

}
