import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(array, value){
        return array.filter(task => task.geo.includes(value));
    }
}