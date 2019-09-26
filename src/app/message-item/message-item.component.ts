import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message-model/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input()
  message:Message;

  constructor() { 

  }

  ngOnInit() {

    // this.message.content.forEach(function(item){
    //   console.log(item);
    // })
    // 
  }

  @Output()
  response = new EventEmitter<number>();

  getResponse(sno:number)
  {
    console.log(sno);
    this.response.emit(sno);
    
  }

  @Output()
  previous = new EventEmitter();
  goBack(){
    
    this.previous.emit();
  }

  // public getResponse(no:number) {
  //   if(no!=0){
  //   this.responseList.push(no);
  //   console.log(this.responseList);
  //   }
  // }

}
