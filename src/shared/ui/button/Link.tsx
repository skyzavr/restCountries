import { Link } from 'react-router-dom';

import css from './button.module.css';

type btnProps = {
  title: string;
  to: string;
};

export const LinkButton = (props: btnProps) => {
  const { title, to } = props;

  return (
    <Link className={css.btnWrapper} to={to}>
      {title}
    </Link>
  );
};
