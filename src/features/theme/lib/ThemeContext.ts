import { createContext } from 'react';
import { ThemeContextType } from '../model/type';

export const ThemeContext = createContext<ThemeContextType | null>(null);
