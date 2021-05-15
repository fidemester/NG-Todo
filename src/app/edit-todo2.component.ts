/*
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Todo} from "./todo";
import {TodoService} from "./todo.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'todo-edit-todo',
  template: `
    <p>
      edit-todo works!
    </p>
    <form [formGroup]="myForm" >
    <label for="text">Todo:</label>
    <input type="text" id="text">
    <button (click)="editTodo()">Edit</button>
  </form>`,
  styles: [
  ]
})
export class EditTodo2Component implements OnInit {
  myForm: FormGroup = new FormGroup({
    todo: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(public dialogRef: MatDialogRef<EditTodo2Component>,
@Inject(MAT_DIALOG_DATA) public todo: Todo,private dialog: MatDialog,
              private todoService: TodoService){ }

  ngOnInit(): void {

  }

  editTodo(){
    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.dialogRef.close(`${this.myForm.value}`);

  }

}
*/
