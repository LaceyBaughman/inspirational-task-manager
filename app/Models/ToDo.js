import { generateId } from "../Utils/generateId.js"

export class ToDo {
  constructor(data) {
    this.id = generateId()
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    
    `
  }
}
