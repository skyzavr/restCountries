import { DetailsList } from '@entities/countryCardDetailList';
import { CountryNeighbors } from '@entities/countryNeighbors';

import { Country } from '@shared/model/type';

import css from './card.module.css';

type cardProps = { country: Country | null };

export const Card = ({ country }: cardProps) => {
  if (!country) return;

  const { borders, flags, correctBorders } = country;

  const bordersIssue =
    borders.length > correctBorders.length || correctBorders.length === 0;

  const note = bordersIssue && (
    <p className={css.note}>
      You may be wondering where at least one neighbor is or if there should be
      more neighbors, I know it for sure! Well, maybe we just don't have that
      data :)
    </p>
  );

  return (
    <>
      <div className={css.detailContainer}>
        <div className={css.countryFlag}>
          <img src={flags.svg} />
          <div className={css.smallScreenNote}>{note}</div>
        </div>
        <div className={css.countryWrapper}>
          <DetailsList details={country} />
          <CountryNeighbors correctBorders={correctBorders} />
        </div>
      </div>
      <div className={css.largeScreenNote}>{note}</div>
    </>
  );
};
