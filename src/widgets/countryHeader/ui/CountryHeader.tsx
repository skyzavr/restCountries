import { Button } from '@shared/ui';

import css from './countryHeader.module.css';

export const CountryHeader = () => {
  const getBack = () => history.back();
  return (
    <div className={css.btnWrapper}>
      <Button title="Back" btnAction={getBack} />
    </div>
  );
};
