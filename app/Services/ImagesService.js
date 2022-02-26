import { ProxyState } from "../AppState.js"
import { bgImage } from "../Models/BgImage.js"
import { sandBoxApi } from "./AxiosService.js"

class ImagesService {
  constructor() { }
  async getBgImages() {
    const res = await sandBoxApi.get('images')
    console.log('[ImagesService]; getBgImages', res.data)
    const backgroundImage = new bgImage(res.data)
    ProxyState.image = backgroundImage
  }
}
export const imagesService = new ImagesService();