import { Country } from '@entities/countryCard/model/types';
import { CountryCard } from '@entities/countryCard';

import css from './mainCardList.module.css';

type cardListProps = { data: Country[] };

export const MainCardList = ({ data }: cardListProps) => {
  return (
    <div className={css.wrapper}>
      {data.map((country, ind) => (
        <CountryCard data={country} key={ind} />
      ))}
    </div>
  );
};
