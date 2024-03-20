import { Box, HStack, SafeAreaView, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { LoginForm } from '../components/LoginForm';

export function LoginScreen() {
  return (
    <SafeAreaView flex={1}>
      <VStack flex={1} justifyContent="center">
        <HStack p="$4" justifyContent="center">
          <Box flex={1} maxWidth="$96" alignSelf="stretch">
            <LoginForm />
          </Box>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
