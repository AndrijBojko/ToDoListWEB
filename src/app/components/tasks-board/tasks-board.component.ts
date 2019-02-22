import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.css']
})
export class TasksBoardComponent implements OnInit {
  tasks = [];
  searchStr = '';

  constructor(private taskService: TaskService, private modalService: NgbModal){}
  
  ngOnInit(){
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  open(content) {
    console.log(">>>>>>>>>>>>>");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
