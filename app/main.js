import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ConditionsController } from "./Controllers/ConditionsController.js";
import { ToDosController } from "./Controllers/ToDosController.js";

class App {
  toDosController = new ToDosController();

  imagesController = new ImagesController();

  quotesController = new QuotesController();

  conditionsController = new ConditionsController();
}

window["app"] = new App();
