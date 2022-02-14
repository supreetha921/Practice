import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'GoogleMaps';
  ngOnInit():void
  {
    let loader = new Loader({
      apiKey:'AIzaSyDgeDW4KCa-nfb1lcOD2HTeGizzde6o-VU'
    })
    loader.load().then(()=>{
      new google.maps.Map(document.getElementById('map')!,{
        center:{lat:12.7727,lng:77.6871},
        zoom:6
    })
  })
}}