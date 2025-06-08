import { Scroll } from '@shared/ui';
import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const offSet = 200;
  const [isScrollVisible, setIsScrollVisible] = useState<boolean>(false);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setIsScrollVisible(window.scrollY > offSet);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrollVisible) return;

  return <Scroll onScroll={handleClick} />;
};
