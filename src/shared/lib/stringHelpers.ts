export const convertListToStr = (list: string[]) => {
  const length = list.length;
  return length > 1 ? list.join(', ') : list[0];
};
