import { Detail } from '@shared/ui';

import { Country } from '@shared/model/type';

import css from './detailsList.module.css';

type detailsProps = { details: Country };

export const DetailsList = ({ details }: detailsProps) => {
  const { name, population, region, subregion, capital } = details;
  return (
    <div className={css.countryDetails}>
      <p>
        {name.official} - aka - {name.common}
      </p>
      <div className={css.details}>
        <Detail title="Population" data={population.toLocaleString()} />
        <Detail title="Region" data={region} />
        <Detail title="SubRegion" data={subregion} />
        <Detail title="Capital" data={capital} />
      </div>
    </div>
  );
};
