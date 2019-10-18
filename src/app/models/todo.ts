export class Todo {
    task: string;
    editing: boolean

    constructor(task: string, editing?: boolean) {
        this.task = task;
        if(editing !== null) {
            this.editing = editing;
        } else {
            this.editing = false;
        }
    }
}