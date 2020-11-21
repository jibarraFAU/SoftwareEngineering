"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartsComponent = void 0;
var core_1 = require("@angular/core");
//import { Chart } from 'chart.js';
//import ChartsEmbededSDK from '@mongodb-js/charts-embed-dom';
// const sdk = new ChartsEmbededSDK({
//   baseUrl: 'https://charts.mongodb.com/charts-project-0-ujjgd',
// });
// const chart = sdk.createChart({
//   chartId: '71cd4020-5258-4b8a-8e24-875ec7afab78'
// });
// chart.render(document.getElementById('chart'));
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent.prototype.refreshDoughnut = function () {
        var ifr = document.getElementsByName('doughnut')[0];
        ifr = ifr;
    };
    ChartsComponent.prototype.refreshTimeline = function () {
        var ifr = document.getElementsByName('timeline')[0];
        ifr = ifr;
    };
    ChartsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'charts',
            templateUrl: './charts.component.html',
            styleUrls: ['./charts.component.css']
        })
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;
//# sourceMappingURL=charts.component.js.map