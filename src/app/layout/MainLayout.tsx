import { Header } from '@widgets/header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--mainTwo)' }}>
        <Outlet />
      </main>
    </>
  );
};
