import './styles.css';
import './components/CryptoWidget.js';

document.querySelector('#app').innerHTML = `
  <div class="container mx-auto px-4 py-8">
    <crypto-widget></crypto-widget>
  </div>
`;