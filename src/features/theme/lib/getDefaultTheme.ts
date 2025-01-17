export const getInitTheme = () => {
  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
  const lsTheme = localStorage.getItem('theme');
  const initTheme = lsTheme ? lsTheme : matches ? 'dark' : 'light';
  return initTheme;
};
