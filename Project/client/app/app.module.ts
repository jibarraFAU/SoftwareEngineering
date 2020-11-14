import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmotesComponent } from './components/emotes/emotes.component';
import { ChartsComponent } from './components/charts/charts.component';



@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule,],

    declarations: [AppComponent, EmotesComponent, ChartsComponent],
    bootstrap: [AppComponent]

})
export class AppModule { }