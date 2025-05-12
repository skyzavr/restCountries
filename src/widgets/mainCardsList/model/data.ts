import { InterObserverOptions } from '@shared/model/type';

export const baseUrl = 'https://restcountries.com/v3.1';

export const options: InterObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

export const countriesPerPage = 10;
