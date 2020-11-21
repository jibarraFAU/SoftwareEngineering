import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmotesComponent } from '../components/emotes/emotes.component';
import { ChartsComponent } from '../components/charts/charts.component';



const routes: Routes = [
  { path: 'emotes', component: EmotesComponent },
  { path: 'charts', component: ChartsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }