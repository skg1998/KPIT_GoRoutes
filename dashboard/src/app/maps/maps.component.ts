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
  lat = -122.486052 //37.830348//26.5775;
  lng = 37.830348//93.1711;

  constructor() { }
  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center:  [35.1715959,31.9305916,],// [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
          [35.20620346069335,31.941237613275092],
          [35.21341323852539,31.952162238024975],
          [35.21392822265624,31.961337918930735],
          [35.21100997924805,31.965998231173806],
          [35.19899368286133,31.971968910549975],
          [35.187835693359375,31.97240577428203],
          [35.17822265625,31.967163272276267],
          [35.173072814941406,31.958133817062862],
          [35.17066955566406,31.950560041013226]
          ]
         }
        }
      });

      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': 'red',
        'line-width': 8
        }
        });
    })

    //// Add Marker on Click
    this.map.on('click', (event) => {
        //const coordinates = [event.lngLat.lng, event.lngLat.lat]
        //const newMarker   = new GeoJson(coordinates, { message: this.message })
        //this.mapService.createMarker(newMarker)
      })
  }
  
}


