import { useContext, useEffect } from 'react';

import { MoonIcon } from '@shared/ui/icons/MoonIcon';
import { SunIcon } from '@shared/ui/icons/SunIcon';
import { getCapitalizeString } from '@shared/lib/helpers';

import { ThemeContext } from '../lib/ThemeContext';
import { ThemeContextType } from '../model/type';
import css from './theme.module.css';

export const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const isDarkTheme = theme === 'dark';
  const themeTitle = `${getCapitalizeString(theme)}Mode`;

  const themeToggle = () => setTheme(isDarkTheme ? 'light' : 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={css.themeWrapper}>
      <span className={css.switchIcon} onClick={themeToggle}>
        {isDarkTheme ? <MoonIcon /> : <SunIcon />}
      </span>
      <span className={css.title}>{themeTitle}</span>
    </div>
  );
};
