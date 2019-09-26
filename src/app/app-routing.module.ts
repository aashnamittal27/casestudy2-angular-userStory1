import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';
import { SalesComponent } from './sales/sales.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';


const routes: Routes = [
  { path: '', component: ChatAreaComponent },
  {path: 'query/:modelname', component: QueryComponent},
  {path: 'sales', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
