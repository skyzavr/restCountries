import { Country } from '@shared/model/type';

export type fetchParam = { query: string };

export type initState = {
  countryData: Country | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string;
};

export type Errors = { [key: string]: string };
