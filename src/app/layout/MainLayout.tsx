import { Header } from '@widgets/header';
import { Outlet } from 'react-router-dom';

import css from './mainLayout.module.css';
import { ScrollToTop } from '@features/upBtn';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={css.wrapper}>
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  );
};
