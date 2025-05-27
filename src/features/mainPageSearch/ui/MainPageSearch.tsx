import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@app/store/store';
import { Search } from '@shared/ui';

import { setSearchQuery } from '../model/slice';

export const MainPageSearch = () => {
  const dispatch = useDispatch();

  const { query: searchValue } = useSelector(
    (state: RootState) => state.mainPageSearch
  );

  const onUpdateHandler = (value: string) => dispatch(setSearchQuery(value));

  return (
    <Search
      placeholder="Search for a country ..."
      onUpdate={onUpdateHandler}
      initialValue={searchValue}
    />
  );
};
