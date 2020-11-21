"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
//import { RouterTestingModule } from '@angular/router/testing';
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var emotes_component_1 = require("./components/emotes/emotes.component");
var charts_component_1 = require("./components/charts/charts.component");
var auth_module_1 = require("./auth/auth.module");
var auth_routing_module_1 = require("./auth/auth-routing.module");
var login_component_1 = require("./auth/components/login/login.component");
var app_routing_module_1 = require("./app-routing/app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                auth_module_1.AuthModule,
                auth_routing_module_1.AuthRoutingModule,
                router_1.RouterModule.forRoot([
                    { path: "", component: login_component_1.LoginComponent }
                ]),
                app_routing_module_1.AppRoutingModule
                //RouterTestingModule,
            ],
            declarations: [app_component_1.AppComponent, emotes_component_1.EmotesComponent, charts_component_1.ChartsComponent,],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map