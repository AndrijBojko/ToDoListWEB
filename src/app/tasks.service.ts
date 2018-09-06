import {Http} from '@angular/http'
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators/'; 

@Injectable()
export class TaskService {

    size = 8;

    constructor (private http: Http) {}

    getTasks(){
        return this.http.get('http://localhost:3001/api/Task')
        .pipe(map(response => response.json()))
        .pipe(map(response => 
            response.map(u => {
                return {
                    name: u.isCompleted.toString(),
                    geo: u.description,
                    image: '.\\assets\\background.jpg'
                }
            })
        ))
    }

    setSize(size){
        this.size = size;
    }
}