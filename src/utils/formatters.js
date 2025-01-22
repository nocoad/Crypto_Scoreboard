export function formatPrice(price) {
  return price.toFixed(2);
}

export function formatPercentage(value) {
  return Math.abs(value).toFixed(2);
}

export function getChangeSymbol(value) {
  return value >= 0 ? '↑' : '↓';
}

export function getChangeClass(value) {
  return value >= 0 ? 'text-custom-green' : 'text-custom-red';
}