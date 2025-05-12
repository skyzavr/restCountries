import { useRef, useEffect, useState } from 'react';

import { InterObserverOptions } from '@shared/model/type';

export const useObserver = (options: InterObserverOptions) => {
  const node = useRef<HTMLDivElement>(null);
  const [isIntersect, setIsIntersect] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const { isIntersecting } = entries[0];
    setIsIntersect(isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (node.current) observer.observe(node.current);
    return () => {
      if (node.current) observer.unobserve(node.current);
    };
  });

  return [node, isIntersect];
};
