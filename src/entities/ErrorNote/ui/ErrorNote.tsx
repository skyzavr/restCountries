import { ReactElement } from 'react';

import css from './error.module.css';

type errorNoteProps = {
  error: string;
  children?: ReactElement;
};

export const ErrorNote = ({ error, children }: errorNoteProps) => {
  return (
    <section className={css.messageWrapper}>
      <div className={css.error}>
        Looks like some error happened: <p>{error}</p>
      </div>
      <div className={css.linkWrapper}>{children}</div>
    </section>
  );
};
