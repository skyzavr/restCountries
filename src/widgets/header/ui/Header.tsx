import { Link } from 'react-router-dom';

import { Theme } from '@features/theme';
import css from './header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link to="/">Where in the world?</Link>
        <Theme />
      </div>
    </header>
  );
};
