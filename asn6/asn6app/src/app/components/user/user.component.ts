import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  todowork: any[];


  constructor() { }

  ngOnInit() {

    this.todowork = [
      "Xiaowan need to drink some water",
      "Ruanran need to take some rest",
      "Laura need to find a tomb"
    ]
  }
  
  onClick(newitem){
    this.todowork.push(newitem);
    console.log(newitem);
    return false;

  }
  deleteTodo(todolists){
    console.log(todolists);
    for(let i = 0; i < this.todowork.length; i++ ){
      if(this.todowork[i] == todolists){
        this.todowork.splice(i, 1);

      }
    }


  }

  /*addtodo(newitem){
    console.log(newitem);
    this.todowork.push(newitem);
    return false;
  }*/

}

