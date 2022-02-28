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

  switchTemp() {
    let temp = ProxyState.weather
    temp.complete = !temp.complete
    ProxyState.weather = ProxyState.weather
    console.log('toggle', temp.complete)
    if (temp.complete) {
      document.getElementById("temp").innerHTML = temp.CelTemplate
    }
  }
}


export const conditionsService = new ConditionsService();