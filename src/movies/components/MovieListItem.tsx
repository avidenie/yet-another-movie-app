import React from 'react';
import { MovieResource } from '../../core/services/types';
import { Text } from '@gluestack-ui/themed';

export interface MovieListitemProps {
  movie: MovieResource;
}

export function MovieListitem({ movie }: MovieListitemProps) {
  return <Text>{movie.title}</Text>;
}
