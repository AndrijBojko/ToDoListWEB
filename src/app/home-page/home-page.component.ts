import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  tasks = [];
  searchStr = '';

  constructor(private taskService: TaskService){}
  
  ngOnInit(){
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })

  }
}
