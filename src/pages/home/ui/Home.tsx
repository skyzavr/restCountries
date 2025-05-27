import { MainCardList } from '@widgets/mainCardsList';
import { MainFiltration } from '@widgets/mainFiltration';

import css from './home.module.css';

export const HomePage = () => {
  return (
    <section className={css.wrapper}>
      <MainFiltration />
      <MainCardList />
    </section>
  );
};
