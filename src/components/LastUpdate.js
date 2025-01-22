import { formatDistanceToNow } from 'date-fns';

export function LastUpdate(timestamp) {
  return `
    <div class="text-sm font-bold text-black text-right">
      Last updated: ${formatDistanceToNow(timestamp)} ago
    </div>
  `;
}