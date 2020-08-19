import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  userData:any = [
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
    {id: "1", Name: "sahil gupta", country: "india", Date:"19-08-2020", entryTime: "08:35",exitTime:'08:35',totalDuration:'20 min 10 sec'},
  ];
  _object = Object;


  constructor() { }

  ngOnInit() {
  }

}
