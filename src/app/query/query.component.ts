import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { QueryService } from './query.service';
import { Query } from './query';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  queryForm: FormGroup;

  constructor(private queryService: QueryService) {  }

  ngOnInit() {
    this.queryForm = new FormGroup({
      user: new FormGroup({
        name: new FormControl(),
        contactNo: new FormControl(),
        email: new FormControl(),
      }),

      monitor: new FormGroup({
        name: new FormControl(),
      }),

      idate: new FormControl(),
    });
  }

  submitInterest(queryForm:Query) {
    console.log(queryForm);
    this.queryService.submitQuery(queryForm).subscribe(status=> console.log(JSON.stringify(status)));
  }
}
