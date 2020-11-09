import { Component } from '@angular/core';
import { EmoteService } from './services/emote.services';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [EmoteService]
})
export class AppComponent { }