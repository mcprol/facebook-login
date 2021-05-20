import { WebPlugin } from '@capacitor/core';
import { FacebookLoginPlugin, FacebookLoginResponse, FacebookCurrentAccessTokenResponse } from './definitions';
declare global {
    interface Window {
        fbAsyncInit: Function;
    }
}
export declare class FacebookLoginWeb extends WebPlugin implements FacebookLoginPlugin {
    constructor();
    login(options: {
        permissions: string[];
    }): Promise<FacebookLoginResponse>;
    logout(): Promise<void>;
    getCurrentAccessToken(): Promise<FacebookCurrentAccessTokenResponse>;
    getProfile<T extends object>(options: {
        fields: readonly string[];
    }): Promise<T>;
}
declare const FacebookLogin: FacebookLoginWeb;
export { FacebookLogin };
