import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksList } from 'src/app/models/tasks-list';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: TasksList
  taskName:string

  constructor( 
    private store: StoreService,
    private route: ActivatedRoute
  ) {
    const listId = route.snapshot.paramMap.get('id')
    this.list = store.getList(listId)
   }

  ngOnInit() {
  }

  addTask() {
    if(this.taskName) {
      this.store.addTask(this.list,this.taskName)
    }
    this.taskName = ''
  }

  setTaskCompleted(item: Task) {
    this.store.setTaskCompleted(this.list, item)
  }

  removeTask(item) {
    this.store.removeTask(this.list, item)
  }
}
