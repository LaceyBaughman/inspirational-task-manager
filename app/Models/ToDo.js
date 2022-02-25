import { generateId } from "../Utils/generateId.js"

export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description || ''
  }

  get Template() {
    return `

    <form class="align-items-start p-2 rounded-top" onsubmit="app.toDosController.addToDo()">
    <div class="row align-items-start">
      <div class="col-md-4 rounded-top m-4 text-center">
        To Dos:
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-4 p-3">

      <input onclick="app.toDoController.toggleCheck('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}"
      ${this.completed ? 'checked' : ''}>
      <label for="${this.id}" style="${this.completed ? 'text-decoration: line-through;'
        : ''
      }">${this.description}</label>

      </div>
    </div>
    <div class="row align-items-end g-2">
      <div class="col-md-4 p-3">
        <input required minlength="3" maxlength="20" type="text" name="todo" id="generateId()"
          aria-describedby="helpId" class="form-control input-field" placeholder="Add a task!">
        <button class="btn btn-outline-primary">
          Add</button>
      </div>
    </div>
  </form>







    <input onclick="app.toDoController.toggleCheck('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}"
    ${this.completed ? 'checked' : ''}>
    <label for="${this.id}" style="${this.completed ? 'text-decoration: line-through;'
        : ''
      }">${this.description}</label>
    `
  }
}
