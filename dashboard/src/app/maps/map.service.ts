import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  private baseUrl = 'https://flutter-location-47366.firebaseio.com/location.json';

  map: mapboxgl.Map;
  style = 'mapbox://styles/codingboy/ckdr6586v0o0419oolwcu3qg8';
  lat = 28.63576 ;
  lng =  77.22445;
  zoom = 12

  constructor(
    private firestore: AngularFirestore,
    private http: HttpClient
    ) { 
      (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    }


  getUserCoordinate(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }  

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })

    this.map.addControl(new mapboxgl.NavigationControl());

      // path
      this.map.on('load', async () => {
        this.getUserCoordinate().subscribe((data) => {
          let coordinates = [];
          for(let coord in data){
            coordinates.push([data[coord].latitude, data[coord].longitude])
          }
          console.log("coordinates",coordinates);
  
          this.map.addSource('route', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  coordinates
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
            'line-color': 'green',
            'line-width': 8
            }
            });
        })
      })
  }


}
