import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EmoteService } from '../../services/emote.services';
import { Emote } from '../../../Emote';
import { stringify } from 'querystring';



@Component({
    moduleId: module.id,
    selector: 'emotes',
    templateUrl: 'emotes.component.html'
})
export class EmotesComponent {
    emotes: Emote[];
    title: string;
    date: Date;


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
            date: (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear(),
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