import { filterList } from './type';

export enum regions {
  All = 'all',
  Europe = 'europe',
  Asia = 'asia',
  America = 'americas',
  Africa = 'africa',
  Oceania = 'oceania',
}

export const filterParams: filterList[] = [
  { id: 1, name: 'All', value: regions.All },
  { id: 2, name: 'Africa', value: regions.Africa },
  { id: 3, name: 'America', value: regions.America },
  { id: 4, name: 'Asia', value: regions.Asia },
  { id: 5, name: 'Europe', value: regions.Europe },
  { id: 6, name: 'Oceania', value: regions.Oceania },
];
