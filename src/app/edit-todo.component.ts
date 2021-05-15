import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "./todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'todo-edit-todo',
    template: `
        <mat-toolbar style="padding: 30px; font-size: 30px;margin-bottom: 30px">NG Todo</mat-toolbar>
        <form [formGroup]="myForm" (ngSubmit)="editTodo(id)">
            <div style="text-align: center; margin-top: 40px">
                <h1 style="text-align: center">Edit Todo</h1>
                <mat-form-field>
                    <mat-label>Are you sure to edit?</mat-label>
                    <input matInput formControlName="todo" placeholder="Your Todo...">
                </mat-form-field>
                <a routerLink="">
                    <button mat-raised-button color="primary" (click)="editTodo(id)">Edit</button>
                </a>
            </div>

        </form>

        <router-outlet></router-outlet>`,
    styles: []
})
export class EditTodoComponent implements OnInit {

    @Output() isTodo = new EventEmitter<any>();

    id: number;
    myForm: FormGroup = new FormGroup({
        todo: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    constructor(private todoService: TodoService, private route: ActivatedRoute) {}

    editTodo(index: number) {
        this.todoService.editTodo(index, this.myForm.value).subscribe(todo => {
            this.isTodo.emit(todo)
            this.myForm.reset();
        })
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
    }
}
