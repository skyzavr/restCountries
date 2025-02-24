import { regions } from '@features/mainPageFilter/model/data';
import { Country } from '@entities/countryCard/model/types';
export { type Country } from '@entities/countryCard/model/types';

export type initState = {
  countries: Country[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string;
};

export type fetchParams = { query: string; filter: regions };
