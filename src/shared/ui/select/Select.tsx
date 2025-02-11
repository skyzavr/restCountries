import { useEffect, useRef, useState } from 'react';
import { ExpandIcon } from '../icons/ExpandIcon';

import css from './select.module.css';

type listItem = { id: number; name: string; value: string };

type SelectProps = {
  placeholder: string;
  itemList: listItem[];
  onUpdate: (data: listItem) => void;
};

export const Select = (props: SelectProps) => {
  const { placeholder, itemList, onUpdate } = props;

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>(placeholder);

  const selectRef = useRef<HTMLDivElement>(null);

  const onSetSelect = ({ id, name, value }: listItem) => {
    setMenu(value);
    onUpdate({ id, name, value });
  };

  const onSetMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClick = (e: MouseEvent) => {
    const { target } = e;
    if (target instanceof Node && !selectRef.current?.contains(target))
      setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={css.dropDown} onClick={onSetMenu} ref={selectRef}>
      <div className={css.menu}>
        {menu}
        <span className={isMenuOpen ? css.close : ''}>
          <ExpandIcon />
        </span>
      </div>

      {isMenuOpen && (
        <ul className={css.select}>
          {itemList.map(({ id, name, value }) => (
            <li key={id} onClick={() => onSetSelect({ id, name, value })}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
