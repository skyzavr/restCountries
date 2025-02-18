import { MainPageSearch } from '@features/mainPageSearch';
import { MainPageFilter } from '@features/mainPageFilter';

import css from './mainFiltration.module.css';

export const MainFiltration = () => {
  return (
    <div className={css.wrapper}>
      <MainPageSearch />
      <MainPageFilter />
    </div>
  );
};
