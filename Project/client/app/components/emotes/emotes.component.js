"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotesComponent = void 0;
var core_1 = require("@angular/core");
var emote_services_1 = require("../../services/emote.services");
var EmotesComponent = /** @class */ (function () {
    function EmotesComponent(emoteService) {
        var _this = this;
        this.emoteService = emoteService;
        this.emoteService.getEmotes()
            .subscribe(function (emotes) {
            _this.emotes = emotes;
        });
    }
    EmotesComponent.prototype.addEmote = function (event) {
        var _this = this;
        //event.preventDefault();
        var currentDate = new Date();
        var newEmote = {
            title: this.title,
            date: (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear(),
        };
        console.log(this.title);
        console.log(newEmote.date);
        this.emoteService.addEmote(newEmote)
            .subscribe(function (emote) {
            _this.emotes.push(emote);
            _this.title = '';
        });
    };
    /*
        Delete Emote: delets emote selected by button press
        Process: Search data array for matching id for emote.
                 Splice emote from list.
    */
    EmotesComponent.prototype.deleteEmote = function (id) {
        var _this = this;
        var emotes = this.emotes;
        this.emoteService.deleteEmote(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < _this.emotes.length; i++) {
                    if (emotes[i]._id == id) {
                        emotes.splice(i, 1);
                    }
                }
            }
        });
    };
    EmotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'emotes',
            templateUrl: 'emotes.component.html'
        }),
        __metadata("design:paramtypes", [emote_services_1.EmoteService])
    ], EmotesComponent);
    return EmotesComponent;
}());
exports.EmotesComponent = EmotesComponent;
//# sourceMappingURL=emotes.component.js.map