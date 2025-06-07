import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { appDispatch, RootState } from '@app/store/store';

import { CountryCard } from '@widgets/countryCard';
import { CountryHeader } from '@widgets/countryHeader';
import { ErrorNote } from '@entities/ErrorNote';
import { LinkButton } from '@shared/ui';

import { fetchCountryByQuery } from '../model/slice';

import css from './country.module.css';

export const Country = () => {
  const dispatch = useDispatch<appDispatch>();

  const { id } = useParams();

  const { countryData, status, error } = useSelector(
    (state: RootState) => state.country
  );

  const fetchData = useCallback(async () => {
    await dispatch(fetchCountryByQuery({ query: id as string }));
  }, [dispatch, id]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [fetchData]);

  if (status === 'loading')
    return (
      <div className={css.loadingWrapper}>
        <div className={css.loader}></div>Please wait, we are searching
      </div>
    );
  if (status === 'failed')
    return (
      <ErrorNote error={error}>
        <LinkButton title="Go home" to="/" />
      </ErrorNote>
    );

  return (
    <section className={css.wrapper}>
      <div className={css.subWrapper}>
        <CountryHeader />
        <CountryCard country={countryData} />
      </div>
    </section>
  );
};
