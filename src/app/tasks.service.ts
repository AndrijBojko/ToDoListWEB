import {Http} from '@angular/http'
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators/'; 

@Injectable()
export class TaskService {

    constructor (private http: Http) {}

    getTasks(){
        return this.http.get('http://localhost:3001/api/Task')
        .pipe(map(response => response.json()))
        .pipe(map(response => 
            response.map(u => {
                return {
                    id: u.id,
                    isCompleted: u.isCompleted.toString(),
                    description: u.description,
                    image: '.\\assets\\background.jpg'
                }
            })
        ))
    }

    postTask(task){
       return this.http.post('http://localhost:3001/api/Task', 
        {
            description: task,
            isCompleted: false
        })
    }

    deleteTask(task){
        return this.http.delete('http://localhost:3001/api/Task/'+ task.id)
     }
}