import {Http, Headers, RequestOptionsArgs, RequestOptions} from '@angular/http'
import { Injectable } from '@angular/core';
//import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators/'; 

@Injectable()
export class TaskService {

    headers;

    constructor (private http: Http) {
        this.headers = new Headers({
               'Content-Type':  'application/json',
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            })
    }

    getTasks(){

        return this.http.get('http://localhost:58946/api/Task', {headers: this.headers})
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

    getTaskById(id){
        return this.http.get('http://localhost:58946/api/Task/'+ id, {headers: this.headers})
        .pipe(map(response => response.json()))
    }

    postTask(task){
       return this.http.post('http://localhost:58946/api/Task', 
        {
            description: task,
            isCompleted: false
        }, {headers: this.headers})
    }

    updateTask(id, task){
        return this.http.put('http://localhost:58946/api/Task/' + id, 
         {
             description: task,
             isCompleted: false
         }, {headers: this.headers})
     }

    deleteTask(task){
        return this.http.delete('http://localhost:58946/api/Task/'+ task.id, {headers: this.headers})
     }
}