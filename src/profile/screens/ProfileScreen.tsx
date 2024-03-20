import { Box, Button, ButtonText, SafeAreaView } from '@gluestack-ui/themed';
import React, { useCallback } from 'react';
import { authActions } from '../../auth/store/authSlice';
import { useAppDispatch } from '../../core/store/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../core/components/Navigation';

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

export function ProfileScreen() {
  const dispatch = useAppDispatch();

  const onPress = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Box p="$20">
        <Button isFocusVisible={false} onPress={onPress}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  );
}
