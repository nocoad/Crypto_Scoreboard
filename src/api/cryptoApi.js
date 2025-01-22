import axios from 'axios';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export async function getCryptoPrices(coins = ['bitcoin', 'ethereum', 'dogecoin']) {
  try {
    const response = await axios.get(`${COINGECKO_API}/simple/price`, {
      params: {
        ids: coins.join(','),
        vs_currencies: 'usd',
        include_24hr_change: true
      }
    });
    
    // Transform the data to a simpler structure
    return Object.entries(response.data).map(([id, data]) => ({
      name: id,
      price: data.usd,
      change: data.usd_24h_change
    }));
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    return [];
  }
}