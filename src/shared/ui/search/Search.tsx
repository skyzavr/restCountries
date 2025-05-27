import { ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from '@shared/lib/useDebounce';

import { ZoomIcon } from '../icons/ZoomIcon';
import { RemoveIcon } from '../icons/RemoveIcon';

import css from './search.module.css';

type searchProps = {
  placeholder: string;
  initialValue?: string;
  delay?: number;
  onUpdate: (value: string) => void;
};

export const Search = (props: searchProps) => {
  const { placeholder, initialValue = '', delay = 500, onUpdate } = props;

  const [searchQuery, setSearchQuery] = useState<string>(initialValue);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const debounce = useDebounce(searchQuery, delay);

  const isEmptyQuery = searchQuery === '';

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);
  const onClearField = () => setSearchQuery('');

  const onFocusHandler = () => setIsFocus(true);
  const onBlurHandler = () => setIsFocus(false);

  useEffect(() => {
    onUpdate(searchQuery);
  }, [debounce]);

  return (
    <div className={css.wrapper}>
      <span className={isFocus ? css.focused : css.blur}>
        <ZoomIcon />
      </span>
      <input
        className={`${css.search} ${isFocus ? css.focusedSearch : ''}`}
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={onSearchHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      {!isEmptyQuery && (
        <button className={css.clear} onClick={onClearField}>
          <RemoveIcon />
        </button>
      )}
    </div>
  );
};
