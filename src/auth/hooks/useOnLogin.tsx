import React, { useCallback, useState } from 'react';
import { LoginFormData } from '../components/LoginForm';
import { useToast } from '@gluestack-ui/themed';
import { Toast } from '../../core/components/Toast';

export function useOnLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const onSubmit = useCallback(
    (data: LoginFormData) => {
      setIsLoading(true);
      setTimeout(() => {
        if (data.username === 'root' && data.password === 'Test123!') {
          // todo: wire up authentication flow
        } else {
          toast.show({
            render: ({ id }) => {
              return (
                <Toast
                  id={id}
                  action="error"
                  title="Login failed!"
                  description="Check your credentials or try again later."
                />
              );
            },
          });
        }
        setIsLoading(false);
      }, 1000);
    },
    [toast],
  );

  return { isLoading, onSubmit };
}
