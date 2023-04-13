import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  data:any=[];
  status: boolean = true;
  todoData: any = [];
  addData: any = [];
  updateData: any = [];
  deleteData: any = [];

  editTodo:boolean = false;
  mtTodo: any;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

    this.getTotalList();

  }

  getTotalList() {
    this.auth.getData().subscribe((res: any) => {
      this.todoData = res.todos;
      console.log(this.todoData)
    })



  }



  // this.auth.postData().subscribe(response => {
  //   this.addData = response;
  //   console.log(this.addData)
  // })


// this.auth.deleteData().subscribe(result =>{
//   this.deleteData=result;
//   console.log(this.deleteData)
// })

delete (i:number) {
  this.todoData.splice(0, 1)
  this.getTotalList();
}

add(data: any, status: any){
  if (this.data != '') {
    const t = {
      todo: this.data,
      completed: this.status
    }
    this.todoData.push(t)
    this.data = ''
  }
}
edit(t: any){
  // this.editTodo =true;
  // this.data = {
  //   data: t.todo,
  //   status:t.completed,
  //   // id :t.id
  // }
  this.data=t.todo;
  this.status=t.completed
  
}
update(data:any){
  console.log(data)
  this.auth.updateData(data.id).subscribe(Res => {
    this.updateData = Res;
    this.todoData.push(this.updateData);
  })
}
}
