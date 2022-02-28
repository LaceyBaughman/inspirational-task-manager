import { ProxyState } from "../AppState.js";
import { conditionsService } from "../Services/ConditionsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTemp() {
  let temp = ProxyState.weather
  document.getElementById("temp").innerHTML = temp.Template
}

setInterval(_drawTime, 1000);

function _drawTime() {
  const d = new Date();
  let text = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = text
}


export class ConditionsController {
  constructor() {
    this.getTemp()
    ProxyState.on('weather', _drawTemp)
    _drawTime()
  }

  async getTemp() {
    try {
      await conditionsService.getTemp()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  switchTemp() {
    conditionsService.switchTemp()
  }
}


