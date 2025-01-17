import { useState, ReactElement } from 'react';

import { getInitTheme } from './getDefaultTheme';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../model/type';

type themeProps = {
  children: ReactElement;
};

export const ThemeProvider = ({ children }: themeProps) => {
  const defaultTheme = getInitTheme() as Theme;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
