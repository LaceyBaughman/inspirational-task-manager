import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/ToDosController.js";

class App {
  toDosController = new ToDosController();

  imagesController = new ImagesController();

  quotesController = new QuotesController();
}

window["app"] = new App();
