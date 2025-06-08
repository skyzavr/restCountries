import css from './scroll.module.css';

type scrollBtnProps = { onScroll: () => void };

export const Scroll = ({ onScroll }: scrollBtnProps) => {
  return (
    <a className={css.scrollBtn} onClick={onScroll}>
      Up
    </a>
  );
};
