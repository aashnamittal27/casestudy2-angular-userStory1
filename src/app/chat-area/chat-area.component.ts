import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message-model/message';
import { ChatServiceService } from './chat-service.service';
import { MessageOption } from '../message-model/messageOption';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {

  // @Input()
  public message_choice: MessageOption;

  @Input()
  public message: Message;

  @Input()
  public messages: Message[];

  constructor() {
    
    this.message_choice = { question: 'Welcome, Start Exploring', sno: 0 };
    this.message = {
      content: [this.message_choice],
      timestamp: new Date(),
    }
    this.messages = [this.message];
  }

  ngOnInit() {
    // this.getStartUpOptions();
  }

  // public getStartUpOptions(): void {
  //   this.chat_service.getStartUpOptions(this.responseList.join('/')).subscribe(data => {
  //     this.message = new Message(data, new Date);
  //     this.messages.push(this.message);
  //     console.log(this.messages);

  //   });
  // }

  
}
