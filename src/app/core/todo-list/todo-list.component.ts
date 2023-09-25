import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../services/todos.service';


export interface TODO{
   task1:string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})



export class TodoListComponent {
  userid:any;
  user_name:any;
  task1:any;
  user_avatar:any;
  task : string ='';
  tasks :string[]=[];
  todo: TODO[] = [];
  dataSource = this.todo;


constructor(private route:ActivatedRoute,private todoservice:TodosService){
  
}
 ngOnInit(){
    this.route.paramMap.subscribe(paramMap => {
      debugger;
      this.userid = paramMap.get('id');
      //alert(this.userid);
      this.user_name=paramMap.get('name');
      //alert( this.user_name);
      this.user_avatar=paramMap.get('avatar');
      //alert(this.user_avatar);
    });
  
    this.todoservice.getJsonData().subscribe((res: any)=>{
      this.todo = res;
      for (var i = 0; i < res.length; i++) {
      if (res[i].user_id == this.userid) {
          this.task = res[i].task;
          this.tasks.push(this.task);
      }
    }
 });  
        
}

addtask(newtask: string):void{
  this.tasks.push(this.task=newtask);
}

deletetodo(index: number) {
  this.tasks.splice(index,1);
}

}
