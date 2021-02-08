import { Task } from './task'

export class TasksList {

    id: number;
    title: string;
    createdAt: Date;
    finishedAt?: Date;
    tasks: Array<Task>;
    pendings: number;
    taskCount: number;

    constructor(title: string) {
        this.id = new Date().getTime()
        this.title = title
        this.createdAt = new Date()
        this.finishedAt = null
        this.tasks = []   
        this.pendings=0
        this.taskCount=0
    }
}