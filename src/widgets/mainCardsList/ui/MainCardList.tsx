import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { appDispatch, RootState } from '@app/store/store';
import { CountryCard } from '@entities/countryCard';
import { CardListError } from '@entities/cardListError';
import { CardListSkeleton } from '@entities/cardListSkeleton';

import { fetchCountries } from '../model/slice';
import css from './mainCardList.module.css';

export const MainCardList = () => {
  const dispatch = useDispatch<appDispatch>();

  const { countries, status, error } = useSelector(
    (state: RootState) => state.countries
  );
  const { region: filter } = useSelector(
    (state: RootState) => state.mainPageFilter
  );
  const { query } = useSelector((state: RootState) => state.mainPageSearch);

  const data = useCallback(
    () => dispatch(fetchCountries({ query, filter })),
    [dispatch, query, filter]
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    data();
  }, [data]);

  if (status === 'loading') return <CardListSkeleton />;
  if (status === 'failed') return <CardListError error={error} />;
  return (
    <div className={css.wrapper}>
      {countries.slice(0, 12).map((country, ind) => (
        <CountryCard data={country} key={ind} />
      ))}
    </div>
  );
};
