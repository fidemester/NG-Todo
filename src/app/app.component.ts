import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "./todo.service";

@Component({
    template: `
        <h1>Ng Todo</h1>
        <h3>Todo:</h3>
        <form [formGroup]="myForm" (submit)="onSubmit()">
            <input type="text" name="text" id="text" (keyup)="onKeyUp($event)" formControlName="todo">
            <input style="margin-left:20px" type="submit" [disabled]="myForm.invalid">
        </form>
        <div class="todo-list">
            <p style="text-align: center" *ngFor="let todo of todos let i=index">
                {{i + 1}}. {{todo.todo | titlecase}}
                <button (click)="deleteTodo(todo.id)">delete</button>
            </p>
        </div>`,

    selector: 'todo-root',
    styleUrls: ['./app.component.css']

})
export class AppComponent {
    todos = [];

    constructor(private todoService: TodoService) {}

    myForm: FormGroup = new FormGroup({
        todo: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    onSubmit() {
        console.log(this.myForm.value)
        this.todoService.postTodo(this.myForm.value).subscribe(todos => {
            console.log('update', todos);
            console.log("new todo:", this.todos)
        })
        this.myForm.reset()
    }

    onKeyUp(event: any) {
        console.log(event.target.value)
    }

    deleteTodo(index: number) {
        this.todoService.deleteTodo(index).subscribe(todo => {
          console.log(todo)
        })
    }

    ngOnInit() {
        this.todoService.getAllTodos().subscribe(todo => {
            this.todos = todo;
        })
    }
}
