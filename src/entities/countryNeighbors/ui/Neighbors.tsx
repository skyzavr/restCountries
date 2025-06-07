import { LinkButton } from '@shared/ui';

import css from './neighbors.module.css';

type neighborsProps = {
  borders: string[];
  correctBorders: { official: string; common: string }[];
};

export const Neighbors = ({ borders, correctBorders }: neighborsProps) => {
  const bordersIssue =
    borders.length > correctBorders.length || correctBorders.length === 0;

  return (
    <div className={css.neighbors}>
      <div>
        {correctBorders.map((name) => (
          <LinkButton
            key={name.common}
            title={name.common}
            to={`/country/${name.official}`}
          />
        ))}
      </div>
      {bordersIssue && (
        <p className={css.note}>
          You may be wondering where at least one neighbor is or if there should
          be more neighbors, I know it for sure! Well, maybe we just don't have
          that data :)
        </p>
      )}
    </div>
  );
};
