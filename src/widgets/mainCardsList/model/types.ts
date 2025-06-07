import { regions } from '@features/mainPageFilter/model/data';
import { Country } from '@shared/model/type';
export { type Country } from '@shared/model/type';

export type initState = {
  countries: Country[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string;
};

export type fetchParams = { query: string; filter: regions };
