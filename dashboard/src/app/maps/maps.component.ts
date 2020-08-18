import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/codingboy/ckdr6586v0o0419oolwcu3qg8'; //mapbox://styles/codingboy/ckdr6586v0o0419oolwcu3qg8
  lat = 26.5775;
  lng = 93.1711;

  constructor() { }
  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    //// Add Marker on Click
    this.map.on('click', (event) => {
        //const coordinates = [event.lngLat.lng, event.lngLat.lat]
        //const newMarker   = new GeoJson(coordinates, { message: this.message })
        //this.mapService.createMarker(newMarker)
      })
  }
  
}


