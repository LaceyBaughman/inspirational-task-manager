import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";


function _drawToDos() {
  let toDos = ProxyState.todos;
  let template = ''
  toDos.forEach(t => template += t.Template)
  document.getElementById("todos").innerHTML = template
}

export class ToDosController {
  constructor() {
    ProxyState.on("todos", _drawToDos);
    this.getToDos()
  }

  async addToDo() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let newTask = {
        // @ts-ignore
        description: form.description.value
      }
      // @ts-ignore
      await toDosService.addToDo(newTask)
      // @ts-ignore
      form.reset()
    }
    catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getToDos() {
    try {
      await toDosService.getToDos()
    } catch (error) {
      console.error(error);
    }
  }

  checkBox(id) {
    toDosService.checkBox(id)
    Pop.toast('Great Job!')
  }
  async removeToDo(id) {
    const yes = await Pop.confirm('Remove task?')
    if (yes) {
      toDosService.removeToDo(id)
    }
  }
}
