import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";



function _drawQuote() {
  let quote = ProxyState.quotes
  document.getElementById('clue').innerHTML = quote.template
}

export class QuotesController {
  constructor() {
    this.getQuotes()
    ProxyState.on('quote', _drawQuote)
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}




