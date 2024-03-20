import React from 'react';
import { Center, Spinner } from '@gluestack-ui/themed';

export function Loader() {
  return (
    <Center flex={1}>
      <Spinner />
    </Center>
  );
}
