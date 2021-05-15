import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {EditTodoComponent} from "./edit-todo.component";
import {HomeTodoComponent} from "./home-todo.component";

const routes:Routes=[
  {path:"", component:HomeTodoComponent},
  {path:"todo/:id", component:EditTodoComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule { }
