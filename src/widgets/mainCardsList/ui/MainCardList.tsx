import { useDispatch, useSelector } from 'react-redux';
import { RefObject, useCallback, useEffect, useState } from 'react';

import { appDispatch, RootState } from '@app/store/store';
import { CountryCard } from '@entities/countryCard';
import { CardListError } from '@entities/cardListError';
import { CardListSkeleton } from '@entities/cardListSkeleton';
import { useObserver } from '@shared/lib/useObserver';

import { fetchCountries } from '../model/slice';
import { countriesPerPage, options } from '../model/data';
import css from './mainCardList.module.css';

export const MainCardList = () => {
  const [node, isIntersecting] = useObserver(options);
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    data();
  }, [data]);

  useEffect(() => {
    if (!isIntersecting) return;
    setCardsNumber((prev) => prev + calcNewCountries());
  }, [isIntersecting]);

  if (status === 'loading') return <CardListSkeleton />;
  if (status === 'failed') return <CardListError error={error} />;

  return (
    <div className={css.wrapper}>
      {countries.slice(0, cardsNumber).map((country, ind) =>
        ind === cardsNumber - 1 ? (
          <div ref={node as RefObject<HTMLDivElement>} key={ind}>
            <CountryCard data={country} />
          </div>
        ) : (
          <CountryCard data={country} key={ind} />
        )
      )}
    </div>
  );
};
