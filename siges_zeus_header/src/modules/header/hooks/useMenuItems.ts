import { useMemo } from 'react';

export const useMenuItems = () => {
  return useMemo(
    () =>
      ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
      })),
    []
  );
};
