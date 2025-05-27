import { ReactElement, RefObject, useEffect } from 'react';

import { options } from '@widgets/mainCardsList/model/data';
import { useObserver } from '@shared/lib/useObserver';

type props = {
  children: ReactElement;
  onRunCallback: () => void;
};

export const ObserverWrapper = (props: props) => {
  const { children, onRunCallback } = props;
  const [node, isIntersecting] = useObserver(options);

  useEffect(() => {
    if (!isIntersecting) return;
    onRunCallback();
  }, [isIntersecting]);

  return <div ref={node as RefObject<HTMLDivElement>}>{children}</div>;
};
