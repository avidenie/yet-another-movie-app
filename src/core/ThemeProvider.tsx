import React, { PropsWithChildren } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export function ThemeProvider({ children }: PropsWithChildren) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
