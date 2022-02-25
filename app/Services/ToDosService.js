import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { sandBoxApi } from "../Services/AxiosService.js"

class ToDosService {

  constructor() { }

  async addToDo(formData) {
    let todo
    ProxyState.todos = [...ProxyState.todos, new ToDo({ title: Math.random() })]
  }
  removeToDo(id) {
    const todos = ProxyState.todos.filter(v => v.id !== id)
    ProxyState.todos = todos
  }
}

export const toDosService = new ToDosService();

