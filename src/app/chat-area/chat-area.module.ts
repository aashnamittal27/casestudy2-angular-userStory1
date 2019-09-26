import { NgModule } from "@angular/core";
import { ChatAreaComponent } from './chat-area.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ChatAreaComponent],
    imports: [HttpClientModule ],
    exports: [ChatAreaComponent],
    providers: []
})
export class ChatAreaModule {}