"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var emote_services_1 = require("./services/emote.services");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.toggleChartDisplay = function () {
        var T = document.getElementById("chartsContainer");
        if (T.style.display == "block") {
            T.style.display = "none";
        }
        else {
            T.style.display = "block";
        }
    };
    AppComponent.prototype.toggleEmoteDisplay = function () {
        var Y = document.getElementById("emotesContainer");
        if (Y.style.display == "block") {
            Y.style.display = "none";
        }
        else {
            Y.style.display = "block";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [emote_services_1.EmoteService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map