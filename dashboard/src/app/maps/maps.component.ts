import { Component, OnInit } from '@angular/core';
import {MapService} from './map.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private mapservice:MapService ) { }

  ngOnInit() {
    this.mapservice.buildMap()
  }
}


