import css from './error.module.css';

export const CardListError = ({ error }: { error: string }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>{error}</div>
      <div className={css.description}>
        I believe we can't find this country
      </div>
    </div>
  );
};
