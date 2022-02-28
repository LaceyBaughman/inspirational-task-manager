export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description || ''
  }

  get Template() {
    return `
<h4>
<li>
<input class="p-2" onclick="app.toDosController.checkBox('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}" ${this.completed ? 'checked' : ''}>
     
<label for="${this.id}" style="${this.completed ? 'text-decoration: line-through;' : ''}">${this.description}</label>
      
<i class="mdi mdi-delete selectable" title="delete ${this.description}" onclick="app.toDosController.removeToDo('${this.id}')"></i>
</li>
</h4>
    `
  }
}