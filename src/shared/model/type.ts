export type InterObserverOptions = {
  root: null;
  rootMargin: string;
  threshold: number;
};

type typeEnumeration = { [key: string]: string };
type countryName = { official: string; common: string };

export type Country = {
  name: countryName;
  capital: string[];
  languages: typeEnumeration;
  borders: string[];
  correctBorders: countryName[];
  maps: typeEnumeration;
  population: number;
  continents: string[];
  flags: typeEnumeration;
  region: string;
  ccn3: number;
  subregion: string;
  cioc: string;
  cca3: string;
};
