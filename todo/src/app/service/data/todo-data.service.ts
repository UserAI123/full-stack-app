import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, JPA_API_URL } from 'src/app.constants';
import { Todos } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:any)
  {
       return this.http.get<Todos>(`${API_URL}/users/${username}/todos`);
  }
  deleteTodo(username:any,id:any)
  {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }
  retrieveTodo(username:any,id:any)
  {
    return this.http.get<Todos>(`${API_URL}/users/${username}/todos/${id}`);
  }
  updateTodo(username:any,id:any,Todos:any)
  {
    return this.http.put<Todos>(`${API_URL}/users/${username}/todos/${id}`,Todos);
  }
  createTodo(username:any,Todos:any)
  {
    return this.http.post<Todos>(`${API_URL}/users/${username}/todos`,Todos);
  }
}
