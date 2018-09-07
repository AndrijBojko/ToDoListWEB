import { Component, Input } from '@angular/core'
import { TaskService } from '../tasks.service';

@Component ({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
})
export class TaskComponent {

    @Input() task

    constructor(private taskService:TaskService) { }

    isDeleted = false;

    onClick(){
        this.isDeleted = true;
        this.taskService.deleteTask(this.task)
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured", err);
          }
        );
    }
}