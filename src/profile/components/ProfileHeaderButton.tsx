import { ThreeDotsIcon, Icon, Pressable } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ProfileScreenProps } from '../screens/ProfileScreen';

export function ProfileHeaderButton() {
  const navigation = useNavigation<ProfileScreenProps['navigation']>();

  const onPress = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <Pressable onPress={onPress}>
      <Icon as={ThreeDotsIcon} />
    </Pressable>
  );
}
