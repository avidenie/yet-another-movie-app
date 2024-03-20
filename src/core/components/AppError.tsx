import React from 'react';
import {
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  Heading,
  LoaderIcon,
  Text,
} from '@gluestack-ui/themed';

export interface AppErrorProps {
  title?: string;
  message?: string;
  onPress?: () => void;
}

export function AppError({ title, message, onPress }: AppErrorProps) {
  return (
    <Center flex={1}>
      <Heading size="sm">{title ?? 'Oooops!'}</Heading>
      <Text textAlign="center" p="$4" maxWidth="$96">
        {message ??
          'An error has occurred while trying to perform the requested action.'}
      </Text>
      {onPress && (
        <Button
          size="xs"
          variant="outline"
          action="secondary"
          onPress={onPress}
          isFocusVisible={false}>
          <ButtonText>Retry </ButtonText>
          <ButtonIcon as={LoaderIcon} />
        </Button>
      )}
    </Center>
  );
}
