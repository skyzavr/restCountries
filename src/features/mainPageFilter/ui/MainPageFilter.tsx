import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@app/store/store';
import { Select } from '@shared/ui';
import { getCapitalizeString } from '@shared/lib/helpers';

import { filterParams, regions } from '../model/data';
import { setRegion } from '../model/slice';
import { filterListHandler } from '../model/type';

export const MainPageFilter = () => {
  const dispatch = useDispatch();
  const { region } = useSelector((state: RootState) => state.mainPageFilter);

  const onUpdateFilter = ({ value }: filterListHandler) => {
    dispatch(setRegion(value as regions));
  };

  return (
    <Select
      placeholder={getCapitalizeString(region)}
      itemList={filterParams}
      onUpdate={onUpdateFilter}
    />
  );
};
