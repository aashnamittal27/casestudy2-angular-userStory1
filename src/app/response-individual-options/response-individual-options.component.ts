import { Component, OnInit, Input } from '@angular/core';
import { MessageOption } from '../message-model/messageOption';

@Component({
  selector: 'app-response-individual-options',
  templateUrl: './response-individual-options.component.html',
  styleUrls: ['./response-individual-options.component.css']
})
export class ResponseIndividualOptionsComponent implements OnInit {

  @Input()
  message_choice:MessageOption;

  message_str;
  

  constructor() { }

  ngOnInit() {
    // this.message_str = Object.values(this.message_choice.choice);
  }

  public getResponse():void
  {
    
  }
}
