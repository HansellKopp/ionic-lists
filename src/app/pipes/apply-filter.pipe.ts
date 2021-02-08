import { Pipe, PipeTransform } from '@angular/core';
import { TasksList } from '../models/tasks-list';

@Pipe({
  name: 'applyFilter'
})
export class ApplyFilterPipe implements PipeTransform {

  transform(value: Array<TasksList>, ...args: unknown[]): Array<TasksList> {
    const status = args[0]
    if(status==='pending') {
      return [...value.filter(item=> (item.finishedAt===null))]
    }
    if(status==='finished') {
      return [...value.filter(item=> (item.finishedAt!==null))]
    }
    return value;
  }

}
