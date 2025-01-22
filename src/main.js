import './styles.css';
import './components/CryptoWidget.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-crypto-pattern bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto px-4 py-8">
      <crypto-widget></crypto-widget>
    </div>
  </div>
`;