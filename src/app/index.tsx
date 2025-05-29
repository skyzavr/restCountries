import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { NotFound } from '@pages/NotFound';
import { HomePage } from '@pages/home';
import { Country } from '@pages/country';

import { ThemeProvider } from '@features/theme/lib/ThemeProvider';

import { MainLayout } from './layout/MainLayout';
import { store } from './store/store';

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '*', element: <NotFound /> },
        { path: '/country/:id', element: <Country /> },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};
