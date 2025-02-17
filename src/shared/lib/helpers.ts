export const getCapitalizeString = (word: string) => {
  if (word.trim() === '') return '';

  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
};
