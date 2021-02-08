import { Injectable } from '@angular/core';
import { title } from 'process';
import { Task } from '../models/task';
import { TasksList } from '../models/tasks-list'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private tasklist: Array<TasksList> = [];

  constructor() {
    this.loadStore()
  }

  getTasklist() {
    const list = this.tasklist
      .map(s=> ({...s, 
        pendings: s.tasks.map(i=> i.completed).filter(s=>!s).length,
        taskCount: s.tasks.length
      }))
    return list
  }

  addTaskLisk(name: string) {
    const newList = new TasksList(name)
    this.tasklist.push(newList)
    this.saveStore()
    return newList.id
  }

  editTaskLisk(list: TasksList, title:string) {
    this.tasklist = this.tasklist.map(item=> {
      if(item.id===list.id) item.title = title
      return item
    }) 
    this.saveStore()
  }

  private checkCompleted(tasklist: TasksList) {
    const pendings = tasklist.tasks.map(i=> i.completed).filter(s=>!s).length
    tasklist.finishedAt= pendings===0 ? new Date(): null
  }

  addTask(tasklist: TasksList, taskname: string) {
    tasklist.tasks.push(new Task(taskname))
    tasklist.finishedAt = null
    this.saveStore()
  }

  removeTask(list: TasksList, task: Task) {
    this.tasklist = this.tasklist.map(item=> {
      if(item.id===list.id) {
        item.tasks = item.tasks.filter(t=> task.id!==t.id) 
      }
      return item
    })
    this.checkCompleted(list)
    this.saveStore()
  }

  removeList(list: TasksList) {
    this.tasklist = this.tasklist.filter(item=> item.id!==list.id) 
    this.saveStore()
  }

  setTaskCompleted(list: TasksList, task: Task) {
    this.tasklist = this.tasklist.map(item=> {
      if(item.id===list.id) {
        item.tasks = item.tasks.map(t=> task.id===t.id ? task: t) 
        this.checkCompleted(item)
      }
      return item
    })

    this.saveStore()
  }

  getList( id: number | string) {
    id = Number(id)
    return this.tasklist.find(item=> item.id===id)
  }

  loadStore() {
    this.tasklist = JSON.parse(localStorage.getItem('TasksList')) || []
  }

  saveStore() {
    localStorage.setItem('TasksList', JSON.stringify(this.tasklist) )
  }
}
