import { formatPrice, formatPercentage, getChangeSymbol, getChangeClass } from '../utils/formatters.js';

export function PriceCard({ name, price, change }) {
  if (typeof price !== 'number' || typeof change !== 'number') {
    return '';
  }

  return `
    <div class="bg-white rounded-lg shadow-md p-4 mb-4">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold capitalize ${getChangeClass(change)}">${name}</h3>
        <div class="text-right">
          <div class="text-xl font-bold">$${formatPrice(price)}</div>
          <div class="text-sm ${getChangeClass(change)}">
            ${getChangeSymbol(change)} ${formatPercentage(change)}%
          </div>
        </div>
      </div>
    </div>
  `;
}