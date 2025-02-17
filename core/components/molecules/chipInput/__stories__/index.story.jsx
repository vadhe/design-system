import * as React from 'react';
import { ChipInput } from '@/index';

export const all = () => {
  const allowDuplicates = false;
  const placeholder = 'Add value';
  const disabled = false;

  return (
    <ChipInput
      allowDuplicates={allowDuplicates}
      placeholder={placeholder}
      disabled={disabled}
      chipOptions={{ clearButton: true }}
    />
  );
};

export default {
  title: 'Components/ChipInput/All',
  component: ChipInput,
};
