import { ReactElement } from 'react';
import classNames from 'classnames';

import css from './button.module.css';

type btnProps = {
  title: string;
  btnAction: () => void;
  children?: ReactElement;
};

export const Button = (props: btnProps) => {
  const { title, btnAction, children } = props;

  const iconButton = children ? css.iconBtn : '';
  const btnClassname = classNames(css.btnWrapper, iconButton);
  return (
    <button className={btnClassname} onClick={btnAction}>
      <span>{children}</span>
      {title}
    </button>
  );
};
