import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "./todo.service";

@Component({
    selector: 'todo-home-todo',
    template: `
        <mat-toolbar style="padding: 30px; font-size: 30px;margin-bottom: 30px">NG Todo</mat-toolbar>
        <h1 style="text-align: center">Your Todos Today:</h1>
        <form [formGroup]="myForm" (submit)="onSubmit()">
            <div style="text-align: center">
                <mat-form-field>
                    <mat-label>Your Todo...</mat-label>
                    <input name="text" formControlName="todo" matInput placeholder="What's next?">
                </mat-form-field>
                <button mat-raised-button color="primary" style="margin-left:20px" [disabled]="myForm.invalid">Save
                </button>
            </div>

        </form>
        <div class="todo-list">
            <mat-card role="region" tabindex="5" style="text-align: center;" *ngFor="let todo of todos let i=index">
                {{i + 1}}. {{todo.todo | titlecase}}
                <span style="cursor: pointer" (click)="deleteTodo(todo.id, i)" class="material-icons">delete</span>
                <a routerLink="todo/{{todo.id}}"><span class="material-icons">edit</span></a>
            </mat-card>
        </div>
        <router-outlet></router-outlet>
        <!-- <todo-edit-todo (isTodo)="editTodo($event)">
         </todo-edit-todo>-->
    `,
    styleUrls: ['./home-todo.component.css']
})
export class HomeTodoComponent implements OnInit {
    todos = [];
    // editTodo: any;

    constructor(private todoService: TodoService) {}

    myForm: FormGroup = new FormGroup({
        todo: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    onSubmit() {
        console.log(this.myForm.value)
        this.todoService.postTodo(this.myForm.value).subscribe(todo => {
            this.todos.push(todo)
        })
        this.myForm.reset()
    }

    deleteTodo(id: number, index: number) {
        this.todoService.deleteTodo(id).subscribe(todo => {
            this.todos.splice(index, 1)
        }, error => {
            console.log(error);
        })
    }

    /*openDialog() {
        let dialogRef = this.dialog.open(EditTodoComponent, {
            height: '400px',
            width: '600px',
            data:{todo:this.myForm.value}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.todo = result;
            console.log('hello',this.todo)
        });
    }
     */
    ngOnInit() {
        this.todoService.getAllTodos().subscribe(todo => {
            this.todos = todo;
        })
    }
}
