export class Task {
    id: number;
    description: string;
    completed: boolean;

    constructor(description: string) {
        this.id = new Date().getTime()
        this.description = description;
        this.completed = false;
    }
}