import { Link } from 'react-router-dom';

import { convertListToStr } from '@shared/lib/stringHelpers';
import { Country } from '@shared/model/type';

import css from './countryCard.module.css';

type cardProps = { data: Country };

export const CountryCard = ({ data }: cardProps) => {
  const { name, capital, population, continents, flags } = data;
  const { svg, alt } = flags;

  const infoList = [
    { key: 'Population', value: Number(population).toLocaleString() },
    { key: 'Region', value: convertListToStr(continents) },
    { key: 'Capital', value: capital },
  ];

  return (
    <Link to={`/country/${name.common}`} state={data} className={css.wrapper}>
      <div className={css.flag}>
        <img src={svg} alt={alt} />
      </div>
      <div className={css.info}>
        <div className={css.countryName}>{name.common}</div>
        <div className={css.infoWrapper}>
          {infoList.map(({ key, value }, ind) => (
            <div className={css.infoItem} key={ind}>
              <span className={css.listTitle}>{key}</span>
              <span className={css.listValue}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
