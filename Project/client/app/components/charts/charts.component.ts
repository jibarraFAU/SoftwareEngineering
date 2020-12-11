import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Emote } from '../../../Emote';
//import { Chart } from 'chart.js';
//import ChartsEmbededSDK from '@mongodb-js/charts-embed-dom';

// const sdk = new ChartsEmbededSDK({
//   baseUrl: 'https://charts.mongodb.com/charts-project-0-ujjgd',

// });
// const chart = sdk.createChart({
//   chartId: '71cd4020-5258-4b8a-8e24-875ec7afab78'
// });
// chart.render(document.getElementById('chart'));


@Component({
  moduleId: module.id,
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  ngOnInit() {

  }

  refreshDoughnut() {
    var ifr = document.getElementsByName('doughnut')[0];
    ifr = ifr;
  }
  refreshTimeline() {
    var ifr = document.getElementsByName('timeline')[0];
    ifr = ifr;
  }
}
