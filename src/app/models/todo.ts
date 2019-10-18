export class Todo {
    task: string;
    editing: boolean;
    completed: boolean;

    constructor(task: string, editing?: boolean) {
        this.task = task;
        this.completed = false;
        if (editing !== null) {
            this.editing = editing;
        } else {
            this.editing = false;
        }
    }
}
