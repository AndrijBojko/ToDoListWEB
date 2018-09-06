import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  size;
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.size = this.taskService.size;
  }

  onChange(){
    this.taskService.setSize(+this.size)
  }

}
