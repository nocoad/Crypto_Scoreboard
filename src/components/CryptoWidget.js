import { getCryptoPrices } from '../api/cryptoApi.js';
import { PriceCard } from './PriceCard.js';
import { LastUpdate } from './LastUpdate.js';

export class CryptoWidget extends HTMLElement {
  constructor() {
    super();
    this.coins = [];
    this.lastUpdate = new Date();
  }

  connectedCallback() {
    this.classList.add('crypto-widget', 'p-4', 'rounded-xl');
    this.startUpdating();
  }

  disconnectedCallback() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  async updatePrices() {
    try {
      this.coins = await getCryptoPrices();
      this.lastUpdate = new Date();
      this.render();
    } catch (error) {
      console.error('Failed to update prices:', error);
    }
  }

  startUpdating() {
    this.updatePrices();
    this.updateInterval = setInterval(() => this.updatePrices(), 30000);
  }

  render() {
    this.innerHTML = `
      <div class="mb-4">
        <h2 class="text-2xl font-bold mb-4 text-black">Crypto Scoreboard</h2>
        ${this.coins.map(coin => PriceCard(coin)).join('')}
        ${LastUpdate(this.lastUpdate)}
      </div>
    `;
  }
}

customElements.define('crypto-widget', CryptoWidget);