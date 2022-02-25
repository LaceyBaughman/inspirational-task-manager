import { generateId } from "../Utils/generateId.js"

export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description || ''
  }

  get Template() {
    return `

      <input onclick="app.toDoController.checkBox('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}"
      ${this.completed ? 'checked' : ''}>
      <label for="${this.id}" style="${this.completed ? 'text-decoration: line-through;'
        : ''
      }">${this.description}</label>

    `
  }
}
