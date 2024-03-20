import { useToast } from '@gluestack-ui/themed';
import React, { useCallback, useState } from 'react';
import { Toast } from '../../core/components/Toast';
import { useAppDispatch } from '../../core/store/hooks';
import { LoginFormData } from '../components/LoginForm';
import { authActions } from '../store/authSlice';

export function useOnLogin() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const onSubmit = useCallback(
    (data: LoginFormData) => {
      setIsLoading(true);
      setTimeout(() => {
        if (data.username === 'root' && data.password === 'Test123!') {
          dispatch(authActions.login());
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
    [dispatch, toast],
  );

  return { isLoading, onSubmit };
}
