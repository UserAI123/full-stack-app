import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  id!: number;
  todo!: Todos;
  constructor(
    private service:TodoDataService,
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todos(this.id,'','',new Date(),false);
    if(this.id!=-1)
    {
    this.service.retrieveTodo('in28minutes',this.id).subscribe(data=>this.todo=data)
    }
  }
  save()
  {
    if(this.id===-1)
    {
        this.service.createTodo('vijeth',Todos).subscribe(
          data=>{console.log(data);
          this.router.navigate(['listTodos']);
        }
        )
    }
    else{
       this.service.updateTodo('vijeth',this.id,this.todo).subscribe(
         data=>{console.log(data);
        this.router.navigate(['listTodos']);
      })
  }
}

}
