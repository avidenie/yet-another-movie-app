import {
  Toast as OriginalToast,
  ToastDescription,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: 'attention' | 'error' | 'warning' | 'success' | 'info';
}

export function Toast({
  id,
  title,
  description,
  action = 'attention',
}: ToastProps) {
  const toastId = 'toast-' + id;

  return (
    <OriginalToast nativeID={toastId} action={action} variant="solid">
      <VStack space="xs" minWidth="80%">
        {!!title && <ToastTitle>{title}</ToastTitle>}
        {!!description && <ToastDescription>{description}</ToastDescription>}
      </VStack>
    </OriginalToast>
  );
}
