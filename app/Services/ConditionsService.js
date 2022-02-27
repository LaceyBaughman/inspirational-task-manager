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
    document.getElementById("temp").innerHTML = temp.CelTemplate
    ProxyState.weather = ProxyState.weather

    // let todos = ProxyState.todos
    // const found = todos.find(ToDo => id == ToDo.id)
    // found.completed = !found.completed
    // const res = await sandBoxApi.put('LaceyBaughman/todos/' + found.id, found)
    // ProxyState.todos = ProxyState.todos
  }





}


export const conditionsService = new ConditionsService();