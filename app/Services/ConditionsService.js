import { ProxyState } from "../AppState.js";
import { Temp } from "../Models/Temp.js";
import { sandBoxApi } from "./AxiosService.js";



class ConditionsService {
  constructor() {
  }

  async getTemp() {
    const res = await sandBoxApi.get('weather')
    console.log('[WeatherService]; getWeather', res.data)
    ProxyState.weather = new Temp(res.data)
  }
}

export const conditionsService = new ConditionsService();