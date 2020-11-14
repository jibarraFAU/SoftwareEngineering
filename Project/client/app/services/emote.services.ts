import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { _ } from 'core-js';
import 'rxjs/add/operator/map';
import { Emote } from '../../Emote';

@Injectable()
export class EmoteService {
    constructor(private http: Http) {
        console.log('Emote Service Initialized...');
    }

    getEmotes() {
        return this.http.get('/api/emotes') //get emotes from api
            .map(res => res.json());
    }

    addEmote(newEmote) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/emote', JSON.stringify(newEmote), { headers: headers })
            .map(res => res.json());
    }

    deleteEmote(id) {
        return this.http.delete('/api/emote/' + id)
            .map(res => res.json());
    }

}