import { regions } from './data';

export type filterList = { id: number; name: string; value: regions };

export type filterListHandler = Omit<filterList, 'value'> & {
  value: regions | string;
};
