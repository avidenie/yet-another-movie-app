import { Button, ButtonSpinner, ButtonText } from '@gluestack-ui/themed';
import React from 'react';

export interface LoginButtonProps {
  isLoading: boolean;
  onPress: () => void;
}

export function LoginButton({ isLoading, onPress }: LoginButtonProps) {
  return (
    <Button isFocusVisible={false} onPress={onPress} isDisabled={isLoading}>
      {isLoading && <ButtonSpinner mr="$2" />}
      <ButtonText>{isLoading ? 'Please wait ...' : 'Login'}</ButtonText>
    </Button>
  );
}
