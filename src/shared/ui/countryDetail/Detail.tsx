import css from './detail.module.css';

type detailProps = {
  title: string;
  data: string | number | string[] | number[];
};

export const Detail = ({ title, data }: detailProps) => {
  return (
    <div className={css.detailsRow}>
      <p className={css.title}>{title}</p>
      <p className={css.data}>{data}</p>
    </div>
  );
};
