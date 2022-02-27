import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandBoxApi } from "./AxiosService.js"

class QuotesService {
  constructor() {
  }

  async getQuotes() {
    const res = await sandBoxApi.get('quotes')
    console.log('[QuotesService]; getQuotes', res.data)
    ProxyState.quotes = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()