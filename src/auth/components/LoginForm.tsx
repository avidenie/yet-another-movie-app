import React from 'react';
import { useForm } from 'react-hook-form';
import { UsernameTextInput } from './UsernameTextInput';
import { PasswordTextInput } from './PasswordTextInput';
import { Card, Heading, Text, VStack } from '@gluestack-ui/themed';
import { LoginButton } from './LoginButton';
import { useOnLogin } from '../hooks/useOnLogin';

export interface LoginFormData {
  username: string;
  password: string;
}

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { isLoading, onSubmit } = useOnLogin();

  return (
    <Card>
      <VStack space="lg">
        <Heading textAlign="center">Welcome</Heading>
        <Text textAlign="center">Please login using the form below</Text>
        <UsernameTextInput isDisabled={isLoading} control={control} />
        <PasswordTextInput isDisabled={isLoading} control={control} />
        <LoginButton isLoading={isLoading} onPress={handleSubmit(onSubmit)} />
      </VStack>
    </Card>
  );
}
