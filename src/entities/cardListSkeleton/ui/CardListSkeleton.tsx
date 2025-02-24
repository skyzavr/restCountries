import css from './skeleton.module.css';

export const CardListSkeleton = () => {
  const pseudoList = new Array(9).fill(null);
  const pseudoListInner = new Array(3).fill(null);

  return (
    <div className={css.wrapper}>
      {pseudoList.map((_, ind) => (
        <div className={css.cardWrapper} key={ind}>
          <div className={css.flag}></div>
          <div className={css.info}>
            <div className={css.countryName}></div>
            <div className={css.infoWrapper}>
              {pseudoListInner.map((_, ind) => (
                <div className={css.infoItem} key={ind}></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
