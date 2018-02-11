var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name LineLogin
 * @description
 */
var LineLogin = (function (_super) {
    __extends(LineLogin, _super);
    function LineLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    LineLogin.prototype.initialize = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (param) { return; };
    LineLogin.prototype.login = function (param) { return; };
    LineLogin.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LineLogin.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LineLogin.prototype, "initialize", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LineLogin.prototype, "login", null);
    /**
     * @name LineLogin
     * @description
     */
    LineLogin = __decorate([
        Plugin({
            pluginName: 'LineLogin',
            plugin: 'cordova-plugin-line-login',
            pluginRef: 'lineLogin',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/kntmrkm/cordova-line-login-plugin',
            // the github repository URL for the plugin
            install: 'ionic cordova plugin add https://github.com/kntmrkm/cordova-line-login-plugin --variable LINE_CHANNEL_ID={your_line_channel_id}',
            installVariables: ['LINE_CHANNEL_ID'],
            platforms: ['Android', 'iOS']
        })
    ], LineLogin);
    return LineLogin;
}(IonicNativePlugin));
export { LineLogin };
//# sourceMappingURL=index.js.map