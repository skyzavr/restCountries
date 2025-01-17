import { Theme } from '@features/theme';
import css from './header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <p>Where in the world?</p>
        <Theme />
      </div>
    </header>
  );
};
