import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message-model/message';
import { ChatServiceService } from '../chat-area/chat-service.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  messages: Message[];

  responseList: Array<number>;

  constructor(private chat_service: ChatServiceService) { }

  ngOnInit() {
    this.responseList = [];
    console.log(this.messages);
  }

  onGetResponse(sno:number) {
    console.log("parent comp"+sno);
    console.log("BEfore")

    if (sno != 0) {
      this.responseList.push(sno);
    }
      console.log(this.responseList);
    
      this.chat_service.getStartUpOptions(this.responseList.join('/')).subscribe(data=>{

        var array = [];
        if( data==null)
        {
          array.push({
            question: "No monitor exists try some other sequence!!"
          });
        }
        else  {
        if (data[0].question == undefined) {
          if(data[0].name!=undefined)
          {
            array.push({
              name: data[0].name,
              brand: data[0].brand,
              size: data[0].size,
              type: data[0].type
            })
          }
          else {
            for (var i=0; i < data.length; i++) {
              array.push({
                sno: i+1,
                question: data[i]
              })
            }
        }

        }
        else {
          array = data;
        }
      }

        const message = new Message(array, new Date);
        this.messages.push(message);
      });
      console.log(this.messages);
    

  }

  onBackClick()
  {
    if(this.messages.length>1)
    {this.messages.pop();
      this.responseList.pop();
    }
  }

}
