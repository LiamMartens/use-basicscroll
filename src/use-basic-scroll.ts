import { useEffect, useMemo } from 'react';
import * as basicScroll from 'basicscroll';

export function useBasicScroll<E extends HTMLElement>(
  ref: React.MutableRefObject<E | null>,
  config: basicScroll.Data
) {
  const instance = useMemo(() => {
    if (typeof window !== 'undefined') {
      if (ref.current) {
        return basicScroll.create({
          ...config,
          elem: ref.current,
        });
      }
    }
    return null;
  }, [ref.current, config]);

  useEffect(() => {
    if (instance) {
      instance.start();
      return () => {
        instance.destroy();
      };
    }
  }, [instance]);

  return instance;
}