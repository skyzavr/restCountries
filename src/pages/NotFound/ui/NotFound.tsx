import { useNavigate } from 'react-router-dom';

import { Button } from '@shared/ui';
import css from './notFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');
  return (
    <section className={css.wrapper}>
      <p className={css.title}>Error 404</p>
      <h1 className={css.header}>There is no light here.</h1>
      <p className={css.desc}>The page you are lookin’ for does not exist...</p>
      <Button title="Lets go home" btnAction={navigateToHome} />
    </section>
  );
};
