import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { LoginFormData } from './LoginForm';

export interface UsernameTextInputProps {
  control: Control<LoginFormData, any>;
  isDisabled: boolean;
}

export function UsernameTextInput({
  control,
  isDisabled,
}: UsernameTextInputProps) {
  return (
    <Controller
      control={control}
      rules={{
        required: {
          value: true,
          message: 'Username cannot be empty.',
        },
      }}
      render={({
        field: { onBlur, onChange, value },
        formState: { errors },
      }) => (
        <FormControl
          size="md"
          isDisabled={isDisabled}
          isInvalid={'username' in errors}>
          <FormControlLabel mb="$1">
            <FormControlLabelText>Username</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              placeholder="type your username"
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              value={value}
              autoCapitalize="none"
            />
          </Input>
          {'username' in errors && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {errors.username?.message}
              </FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>
      )}
      name="username"
    />
  );
}
