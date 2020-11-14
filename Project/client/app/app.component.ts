import { Component } from '@angular/core';
import { EmoteService } from './services/emote.services';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [EmoteService]
})
export class AppComponent {

    toggleChartDisplay() {
        var T = document.getElementById("chartsContainer");
        if (T.style.display == "block") {
            T.style.display = "none";
        }
        else {
            T.style.display = "block";
        }

    }
    toggleEmoteDisplay() {
        var Y = document.getElementById("emotesContainer");
        if (Y.style.display == "block") {
            Y.style.display = "none";
        }
        else {
            Y.style.display = "block";
        }

    }

}