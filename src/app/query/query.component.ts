import { Component, OnInit } from '@angular/core';
import { query } from './query';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  query: query
  constructor() { }

  ngOnInit() {
  }

}
