import React from 'react';
import { FlatList } from 'react-native';
import { AppError } from '../../core/components/AppError';
import { Loader } from '../../core/components/Loader';
import { useGetPopularMoviesQuery } from '../../core/services/movieApi';
import { MovieListitem } from '../components/MovieListItem';

export function PopularMoviesScreen() {
  const { data, isError, refetch } = useGetPopularMoviesQuery();

  if (data) {
    return (
      <FlatList
        data={data.results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <MovieListitem movie={item} />}
      />
    );
  }

  if (isError) {
    return <AppError onPress={refetch} />;
  }

  return <Loader />;
}
