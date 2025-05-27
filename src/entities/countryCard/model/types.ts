type typeEnumeration = { [key: string]: string };

export type Country = {
  name: typeEnumeration;
  capital: string[];
  languages: typeEnumeration;
  borders: string[];
  maps: typeEnumeration;
  population: number;
  continents: string[];
  flags: typeEnumeration;
  region: string;
};
