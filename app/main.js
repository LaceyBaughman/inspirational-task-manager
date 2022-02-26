import { ImagesController } from "./Controllers/ImagesController.js";
import { ToDosController } from "./Controllers/ToDosController.js";

class App {
  toDosController = new ToDosController();

  imagesController = new ImagesController();
}

window["app"] = new App();
