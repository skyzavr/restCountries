import { Errors, initState } from './type';

export const initialState: initState = {
  countryData: null,
  status: 'idle',
  error: '',
};

export const errors: Errors = {
  notExist: 'We have no information about country such this!',
  noData: "We were trying to find it, but we couldn't",
  other: 'There is some problem with data',
};
