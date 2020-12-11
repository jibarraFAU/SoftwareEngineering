import { Component } from '@angular/core';
import { EmoteService } from '../../services/emote.services';
import { Emote } from '../../../Emote';



@Component({
    moduleId: module.id,
    selector: 'emotes',
    templateUrl: 'emotes.component.html'
})
export class EmotesComponent {
    emotes: Emote[];
    title: string;
    date: Date;
    time: Date;


    constructor(private emoteService: EmoteService) {
        this.emoteService.getEmotes()
            .subscribe(emotes => {
                this.emotes = emotes;
            });


    }

    addEmote(event) {
        //event.preventDefault();
        var currentDate = new Date();
        var newEmote = {
            title: this.title,
            date: (('0' + (currentDate.getMonth() + 1)).slice(-2)) + '-' + (('0' + currentDate.getDate()).slice(-2)) + '-' + (currentDate.getFullYear()),
            time: currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        };
        console.log(this.title);
        console.log(newEmote.date);

        this.emoteService.addEmote(newEmote)
            .subscribe(emote => {
                this.emotes.push(emote);
                this.title = '';
            });
    }

    addHappy() {
        //event.preventDefault();
        var currentDate = new Date();
        var newEmote = {
            title: "happy",
            date: ("0" + (currentDate.getMonth() + 1)).slice(-2) + '-' + ("0" + currentDate.getDate()).slice(-2) + '-' + currentDate.getFullYear(),
            time: currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        };
        console.log(this.title);
        console.log(newEmote.date);

        this.emoteService.addEmote(newEmote)
            .subscribe(emote => {
                this.emotes.push(emote);
                this.title = '';
            });
    }

    addSad() {
        //event.preventDefault();
        var currentDate = new Date();
        var newEmote = {
            title: "sad",
            date: ("0" + (currentDate.getMonth() + 1)).slice(-2) + '-' + ("0" + currentDate.getDate()).slice(-2) + '-' + (currentDate.getFullYear()),
            time: (currentDate.getHours()) + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        };
        console.log(this.title);
        console.log(newEmote.date);

        this.emoteService.addEmote(newEmote)
            .subscribe(emote => {
                this.emotes.push(emote);
                this.title = '';
            });
    }
    addAngry() {
        //event.preventDefault();
        var currentDate = new Date();
        var newEmote = {
            title: "angry",
            date: ("0" + (currentDate.getMonth() + 1)).slice(-2) + '-' + ("0" + currentDate.getDate()).slice(-2) + '-' + (currentDate.getFullYear()),
            time: (currentDate.getHours()) + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        };
        console.log(this.title);
        console.log(newEmote.date);

        this.emoteService.addEmote(newEmote)
            .subscribe(emote => {
                this.emotes.push(emote);
                this.title = '';
            });
    }

    addHungry() {
        //event.preventDefault();
        var currentDate = new Date();
        var newEmote = {
            title: "hungry",
            date: ("0" + (currentDate.getMonth() + 1)).slice(-2) + '-' + ("0" + currentDate.getDate()).slice(-2) + '-' + (currentDate.getFullYear()),
            time: (currentDate.getHours()) + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        };
        console.log(this.title);
        console.log(newEmote.date);

        this.emoteService.addEmote(newEmote)
            .subscribe(emote => {
                this.emotes.push(emote);
                this.title = '';
            });
    }
    /*
        Delete Emote: delets emote selected by button press
        Process: Search data array for matching id for emote.
                 Splice emote from list.
    */
    deleteEmote(id) {
        var emotes = this.emotes;
        this.emoteService.deleteEmote(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < this.emotes.length; i++) {
                    if (emotes[i]._id == id) {
                        emotes.splice(i, 1);
                    }
                }
            }
        });
    }


}