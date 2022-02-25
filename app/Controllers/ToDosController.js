import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _drawToDos() {
  let toDos = ProxyState.todos;
  let template = ''
  toDos.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template

}

//Public
export class ToDosController {
  constructor() {
    ProxyState.on("todos", _drawToDos);
    _drawToDos()
  }

  async addToDo() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let newToDo = {
        // @ts-ignore
        description: form.description.value
      }
      await toDosService.addToDo(FormData)


    }
    catch (error) {
      console.error(error)
      Pop.error(error)
    }


    toDosService.addToDo()
  }

  // async removeToDo(id) {
  //   const yes = await Pop.confirm('Remove ToDo')
  //   if (yes) {
  //     toDosService.removeToDo(id)
  //   }
  // }

}
