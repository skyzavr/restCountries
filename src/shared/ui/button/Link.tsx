import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import classNames from 'classnames';

import css from './button.module.css';

type btnProps = {
  title: string;
  to: string;
  children?: ReactElement;
};

export const LinkButton = (props: btnProps) => {
  const { title, children, to } = props;

  const iconButton = children ? css.iconBtn : '';
  const btnClassname = classNames(css.btnWrapper, iconButton);
  return (
    <Link className={btnClassname} to={to}>
      <span>{children}</span>
      {title}
    </Link>
  );
};
