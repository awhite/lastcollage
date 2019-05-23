export const periods = [
  { key: '1week', title: '1 Week' },
  { key: '1month', title: '1 Month' },
  { key: '3month', title: '3 Months' },
  { key: '6month', title: '6 Months' },
  { key: '1year', title: '1 Year' },
  { key: 'forever', title: 'Forever' }
];

export function getPeriodFromKey(key) {
  const index = parseInt(key) - 1;
  return periods[index].key;
}

export const types = [{ key: 'albums', title: 'Albums' }, { key: 'artists', title: 'Artists' }];

export function getTypeFromKey(key) {
  const index = parseInt(key) - 1;
  return types[index].key;
}
