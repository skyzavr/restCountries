export const convertListToStr = (list: string[] | string) => {
  if (!list) return;
  if (typeof list === 'string') return list;
  return list.length > 1 ? list.join(', ') : list[0];
};
