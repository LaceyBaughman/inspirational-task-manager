import { ToDosController } from "./Controllers/ToDosController.js";

class App {
  toDosController = new ToDosController();
}

window["app"] = new App();
