
export class Temp {
  constructor(data) {
    this.completed = data.completed || false
    this.temp = data.main.temp || ''
    this.fah = ((this.temp - 273.15) * 1.8 + 32).toFixed(2)
    this.cel = (this.temp - 273.15).toFixed(2)
    console.log('What Temp?', this)
  }

  get Template() {
    return `
    <h2>${this.fah} °F </h2>
  `
  }

  get CelTemplate() {
    return `
  <h2>${this.cel} °C
   </h2>
  `
  }

}