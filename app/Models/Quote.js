
export class Quote {
  constructor(data) {
    this.quote = data.content || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <div class="col">
    <h2>${this.quote}</h2>
    </div>
    <div class="col hide-container author"><span class="hide"><b>- 
    ${this.author}</b></span>
    </div>
    `
  }
}