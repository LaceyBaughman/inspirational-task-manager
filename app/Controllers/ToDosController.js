import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";


//Private
// function _drawToDos() {
//   let toDos = ProxyState.todos;
//   let template = ''
//   toDos.forEach(t => template += t.Template)
//   document.getElementById("todos").innerHTML = template

// }

//Public
export class ToDosController {
  // constructor() {
  //   ProxyState.on("ToDos", _drawToDos);
  //   _drawToDos()
  // }

  // addToDo() {
  //   toDosService.addToDo()
  // }

  // async removeToDo(id) {
  //   const yes = await Pop.confirm('Remove ToDo')
  //   if (yes) {
  //     toDosService.removeToDo(id)
  //   }
  // }

}
