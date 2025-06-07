import { DetailsList } from '@entities/countryCardDetailList';
import { CountryNeighbors } from '@entities/countryNeighbors';

import { Country } from '@shared/model/type';

import css from './card.module.css';

type cardProps = { country: Country | null };

export const Card = ({ country }: cardProps) => {
  if (!country) return;

  const { borders, flags, correctBorders } = country;

  return (
    <div className={css.detailContainer}>
      <div className={css.countryFlag}>
        <img src={flags.svg} />
      </div>
      <div className={css.countryWrapper}>
        <DetailsList details={country} />
        <CountryNeighbors borders={borders} correctBorders={correctBorders} />
      </div>
    </div>
  );
};
