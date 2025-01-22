import { formatDistanceToNow } from 'date-fns';

export function LastUpdate(timestamp) {
  return `
    <div class="text-sm text-gray-500 text-right">
      Last updated: ${formatDistanceToNow(timestamp)} ago
    </div>
  `;
}