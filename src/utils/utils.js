const bgColors = [
  { backgroundColor: 'bg-primary', color: 'text-white' },
  { backgroundColor: 'bg-secondary', color: 'text-white' },
  { backgroundColor: 'bg-success', color: 'text-white' },
  { backgroundColor: 'bg-danger', color: 'text-white' },
  { backgroundColor: 'bg-warning', color: 'text-dark' },
  { backgroundColor: 'bg-info', color: 'text-white' },
  { backgroundColor: 'bg-light', color: 'text-dark' },
  { backgroundColor: 'bg-dark', color: 'text-white' },
  { backgroundColor: 'bg-white', color: 'text-dark' },
  { backgroundColor: 'bg-transparent', color: 'text-dark' },
];
export const getRandomClassColor = () => {
  return bgColors[Math.floor(bgColors.length * Math.random())];
};

export const getSearchParam = (string) => {
  return string.substring(string.indexOf('=') + 1);
};
