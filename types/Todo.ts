
export class Todo {
    constructor(public id :number, public title : string, public description: string, public status : TodoStatus) {}
}


export enum TodoStatus {
    Pending = "pending",
    complited = "completed"
}