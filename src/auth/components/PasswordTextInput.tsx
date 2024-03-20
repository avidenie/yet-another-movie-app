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

export interface PasswordTextInputProps {
  control: Control<LoginFormData, any>;
  isDisabled: boolean;
}

export function PasswordTextInput({
  control,
  isDisabled,
}: PasswordTextInputProps) {
  return (
    <Controller
      control={control}
      rules={{
        required: {
          value: true,
          message: 'Password cannot be empty.',
        },
      }}
      render={({
        field: { onBlur, onChange, value },
        formState: { errors },
      }) => (
        <FormControl
          size="md"
          isDisabled={isDisabled}
          isInvalid={'password' in errors}>
          <FormControlLabel mb="$1">
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="password"
              placeholder="type your password"
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              value={value}
            />
          </Input>
          {'password' in errors && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {errors.password?.message}
              </FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>
      )}
      name="password"
    />
  );
}
