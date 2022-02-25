import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { sandBoxApi } from "../Services/AxiosService.js"

class ToDosService {

  constructor() {
  }

  async getToDos() {
    const res = await sandBoxApi.get('')
    console.log('[ToDoService]; getToDos', res.data)
    ProxyState.todos = res.data.map(t => new ToDo(t))
  }

  async addToDo(newTask) {
    const res = await sandBoxApi.post('', newTask)
    console.log('[ToDosService]: create todo', res.data)
    let newDo = new ToDo(res.data)
    ProxyState.todos = [...ProxyState.todos, newDo]
  }

  async checkBox(id) {
    let checks = ProxyState.todos
    const found = checks.find(ToDo => id == ToDo.id)
    found.completed = !found.completed
    const res = await sandBoxApi.put('', + found.id, found)
    ProxyState.todos = ProxyState.todos
  }
  removeToDo(id) {
    const todos = ProxyState.todos.filter(v => v.id !== id)
    ProxyState.todos = todos
  }
}

export const toDosService = new ToDosService();

