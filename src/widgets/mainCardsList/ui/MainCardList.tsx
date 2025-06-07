import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import { appDispatch, RootState } from '@app/store/store';
import { ObservedElement } from '@features/observedElement';
import { CountryCard } from '@entities/countryCard';

import { CardListSkeleton } from '@entities/cardListSkeleton';
import { ErrorNote } from '@entities/ErrorNote';

import { Country } from '@shared/model/type';
import { fetchCountries } from '../model/slice';
import { countriesPerPage } from '../model/data';

import css from './mainCardList.module.css';

export const MainCardList = () => {
  const [cardsNumber, setCardsNumber] = useState(countriesPerPage);
  const dispatch = useDispatch<appDispatch>();

  const { countries, status, error } = useSelector(
    (state: RootState) => state.countries
  );
  const { region: filter } = useSelector(
    (state: RootState) => state.mainPageFilter
  );
  const { query } = useSelector((state: RootState) => state.mainPageSearch);

  const data = useCallback(async () => {
    await dispatch(fetchCountries({ query, filter }));
    setCardsNumber(countriesPerPage);
  }, [dispatch, query, filter]);

  const calcNewCountries = () => {
    const listLength = countries.length;
    return Math.min(countriesPerPage, listLength - cardsNumber);
  };

  const onUpdateCardsList = () =>
    setCardsNumber((prev) => prev + calcNewCountries());

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    data();
  }, [data]);

  if (status === 'loading') return <CardListSkeleton />;
  if (status === 'failed') return <ErrorNote error={error} />;

  return (
    <div className={css.wrapper}>
      {countries.length == 0 && (
        <p className={css.info}>No such countries, huh!</p>
      )}
      {countries.slice(0, cardsNumber).map((country: Country, ind: number) =>
        ind === cardsNumber - 1 ? (
          <ObservedElement key={ind} onRunCallback={onUpdateCardsList}>
            <CountryCard data={country} />
          </ObservedElement>
        ) : (
          <CountryCard data={country} key={ind} />
        )
      )}
    </div>
  );
};
