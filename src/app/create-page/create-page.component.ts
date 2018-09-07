import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  taskToCreate;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    
  }

  onClick(){
    this.taskService.postTask(this.taskToCreate)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured", err);
      }
    );

    this.taskToCreate = "";
  }

}
