
export class Temp {
  constructor(data) {
    this.temp = data.main.temp
    // this.fah = data.main.temp
    // this.cel = data.main.temp
    console.log('What Temp?', this)
  }




  get Template() {
    return `
    <h2>${this.temp}</h2>
  `
  }




}