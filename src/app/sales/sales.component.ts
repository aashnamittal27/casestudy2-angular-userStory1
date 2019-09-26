import { Component, OnInit, Input } from '@angular/core';
import { Interest } from './interest';
import { QueryService } from '../query/query.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  //@Input()
  Sales: Interest[]; 

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getInterests().subscribe(data =>
      this.Sales = data);
  }

}
