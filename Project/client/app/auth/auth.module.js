"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var auth_component_1 = require("./auth.component");
var auth_routing_module_1 = require("./auth-routing.module");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var reset_password_component_1 = require("./components/reset-password/reset-password.component");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                auth_routing_module_1.AuthRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [login_component_1.LoginComponent, register_component_1.RegisterComponent, reset_password_component_1.ResetPasswordComponent, auth_component_1.AuthComponent],
            exports: [login_component_1.LoginComponent, register_component_1.RegisterComponent, reset_password_component_1.ResetPasswordComponent]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map