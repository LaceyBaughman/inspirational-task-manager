import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawBgImages() {
  document.getElementById('bgImage').style.backgroundImage = `url('${ProxyState.image.image}')`
}

export class ImagesController {
  constructor() {
    // console.log('ImagesController')
    ProxyState.on('image', _drawBgImages);
    this.getBgImages()
  }

  async getBgImages() {
    try {
      await imagesService.getBgImages()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}
