import { Component, Input } from '@angular/core'

@Component ({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
})
export class TaskComponent {

    @Input() task

    isMarked = false;

    onClick(){
        this.isMarked = true;
    }
}