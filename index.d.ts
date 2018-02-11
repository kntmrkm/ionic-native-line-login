import { IonicNativePlugin } from '@ionic-native/core';
export interface LineLoginResponse {
    userID: number;
    displayName: string;
    pictureURL: string;
}
/**
 * @name LineLogin
 * @description
 */
export declare class LineLogin extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    initialize(param: {}): Promise<any>;
    login(param: {}): Promise<LineLoginResponse>;
}
