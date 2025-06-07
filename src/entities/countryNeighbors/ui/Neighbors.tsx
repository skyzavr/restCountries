import { LinkButton } from '@shared/ui';

import css from './neighbors.module.css';

type neighborsProps = {
  correctBorders: { official: string; common: string }[];
};

export const Neighbors = ({ correctBorders }: neighborsProps) => {
  return (
    <div className={css.neighbors}>
      <div className={css.btnWrapper}>
        {correctBorders.map((name) => (
          <LinkButton
            key={name.common}
            title={name.common}
            to={`/country/${name.official}`}
          />
        ))}
      </div>
    </div>
  );
};
