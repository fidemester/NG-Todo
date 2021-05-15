import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  static API_URL = "http://localhost:3000/todos";


  constructor(private http: HttpClient) {
  }

  postTodo(todo: Todo): Observable<any> {
    return this.http.post(TodoService.API_URL, todo)
  }

  getAllTodos(): Observable<any> {
    return this.http.get(TodoService.API_URL)
  }

  deleteTodo(id:number): Observable<any> {
    return this.http.delete(TodoService.API_URL+'/'+`${id}`)
  }
  editTodo(id:number, todo:Todo): Observable<any>{
    return this.http.put(TodoService.API_URL+'/'+`${id}`,todo)
  }
}
