import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todos{
  constructor(
    public id:number,
    public username:string,
    public description:string,
    public date:Date,
    public done:boolean
  ){
  
  }
  }
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {

  todos:any;
  message='';
   // new Todos(1,'india',false,new Date()),
   /// new Todos(2,'sri lanka',false,new Date()),
   //new Todos(3,'maldives',false,new Date()),
   // new Todos(4,'thailand',false,new Date())
  
  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos()
{
  this.todoService.retrieveAllTodos('in28minutes').subscribe(
    response=>{
      console.log(response);
      this.todos=response;
    }
  )
}
  deleteTodo(id: any)
  {
    console.log(`deleted id:${id}`);
    this.todoService.deleteTodo("in28minutes",id).subscribe(
      response=>{console.log(response);
      this.message=`Deletion of todo ${id} successfull`;
      this.refreshTodos(); }
      
    )
  }
  updateTodo(id:any)
  {
      console.log(`update ${id}`);
      this.router.navigate(['todos',id]);
  }
  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }

}
