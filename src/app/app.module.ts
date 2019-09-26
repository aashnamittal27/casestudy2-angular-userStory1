import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BotMsgComponent } from './bot-msg/bot-msg.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { HttpClientModule } from '@angular/common/http';
import { ResponseIndividualOptionsComponent } from './response-individual-options/response-individual-options.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotMsgComponent,
    MessageListComponent,
    MessageItemComponent,
    ChatAreaComponent,
    InputFieldComponent,
    ResponseIndividualOptionsComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
