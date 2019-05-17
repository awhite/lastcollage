export const periods = [
  { key: '7day', title: '1 Week' },
  { key: '1month', title: '1 Month' },
  { key: '3month', title: '3 Months' },
  { key: '6month', title: '6 Months' },
  { key: '12month', title: '1 Year' },
  { key: 'overall', title: 'Forever' }
];

export function getPeriodFromKey(key) {
  const index = parseInt(key) - 1;
  return periods[index].key;
}

export const types = ['Albums', 'Artists'];

export function getTypeFromKey(key) {
  const index = parseInt(key) - 1;
  return types[index];
}

export const sizes = [
  { key: '0', title: 'Very Low' },
  { key: '1', title: 'Low' },
  { key: '2', title: 'Medium' },
  { key: '3', title: 'High' }
];
