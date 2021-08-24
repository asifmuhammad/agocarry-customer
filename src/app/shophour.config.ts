import { InjectionToken } from "@angular/core";

export let APP_CONFIG_ShopHour = new InjectionToken<ShopHourConfig>("shophour.config");

export interface FirebaseConfig {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    webApplicationId: string
}

export interface ShopHourConfig {
    appName: string;
    apiBase: string;
    googleApiKey: string;
    oneSignalAppId: string;
    oneSignalGPSenderId: string;
    availableLanguages: Array<{ code: string, name: string }>;
    firebaseConfig: FirebaseConfig;
    showBuyPromt: boolean;
}

export const BaseShopHourConfig: ShopHourConfig = {
    appName: "Shop Hour",
    // apiBase: "https://yourapibase.com/", 
    apiBase: "https://api.agocarry.com/public/",
    googleApiKey:"AIzaSyDLMJOClhhQjkfepu0R8iOCIt7bUpUF0nU", //"AIzaSyA3ACyv5bfuERtbkek_M4rTK3NH-Jt9RBk",
    oneSignalAppId: "14a71c55-8888-4373-afa7-f69c79bfdda7",
    oneSignalGPSenderId: "971942122749",
    availableLanguages: [{
        code: 'en',
        name: 'English' 
    }, {
        code: 'ar',
        name: 'Arabic'
    }
        // , {
        //     code: 'es',
        //     name: 'Spanish'
        // }, {
        //     code: 'fr',
        //     name: 'French'
        // }, {
        //     code: 'id',
        //     name: 'Indonesian'
        // }, {
        //     code: 'pt',
        //     name: 'Portuguese'
        // }
    ],
    showBuyPromt: false,
    firebaseConfig: {
        apiKey: "AIzaSyBzkgi5R1M_owyTrPzfkw8-4OJw7vEcMGU",
        authDomain: "customer-cookfu.firebaseapp.com",
        databaseURL: "https://customer-cookfu-default-rtdb.firebaseio.com",
        projectId: "customer-cookfu",
        storageBucket: "customer-cookfu.appspot.com",
        messagingSenderId: "971942122749",
        webApplicationId: "1:971942122749:web:83d41cd821a538d1a7da94"
    }
};