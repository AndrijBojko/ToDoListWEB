import { Component, Input } from '@angular/core'
import { TaskService } from '../../services/tasks.service';
import { flatMap } from 'rxjs/operators';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component ({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
})
export class TaskComponent {

    @Input() task

    constructor(private taskService:TaskService) { }

    isToCreate = false;

    onCreate(){
        this.isToCreate = true;
    }

    onSave(){
        this.isToCreate = false;
    }
}