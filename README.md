# Yet Another Movie App

The goal of this code lab is to create a simple mobile application using
React Native, a JavaScript framework for writing real, natively rendering
mobile applications for iOS and Android.

The application displays a list of popular movies using [The Movie Database (TMDB)](https://developer.themoviedb.org/docs/getting-started) API, allowing the user to see movie details for a particular movie in a separate page and
to add movies from the list to a list of favorite movies.

## What you'll learn

- bootstrapping a new React Native project
- using an UI library for building layouts
- working with simple forms
- navigating between screens
- local and remote state management
- writing unit tests

### 1. Bootstrap a new project

- setup your development environment for React Native
- start from https://www.reactnative.dev/docs/environment-setup
- follow the `React Native CLI Quickstart` track
- use `yarn` instead of `npm` as the preferred package manager
- bootstrap a new project:

```sh
npx react-native@latest init yet-another-movie-app
```

Code for this section: https://github.com/avidenie/yet-another-movie-app/tree/01-bootstrap

### 2. Set up the UI Library

- we will use [GlueStack](https://gluestack.io/) as the preferred UI library
- follow the [installation guide](https://gluestack.io/ui/docs/guides/install-rn) for setting it up in an existing project
- get familiar with components from the library and use them for building all the other screens and components

Code for this section: https://github.com/avidenie/yet-another-movie-app/tree/02-ui-library

### 3. Create a simple login form

- use components from GlueStack to create a simple form with 2 input fields: username and password
- use [React Hook Form](https://react-hook-form.com/get-started#ReactNative) for form validation

### 4. State management

- set up [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) for state management
- set up an 'auth' reducer with an `isAuthenticated` flag
- use a mock auth service - if username and password match predefined values, dispatch action to set `isAuthenticated` to `true`
- if credentials do not match predefined values, show an error using a toast component or similar
- add a logout button on a Profile screen and render different screens based on the `isAuthenticated` flag
- set up persistance and persist the state between launches

### 5. Authentication flow

- set up [React Navigation](https://reactnavigation.org/docs/getting-started)
- implement [the authentication flow](https://reactnavigation.org/docs/auth-flow/):
  - if `isAuthenticated` flag from `auth` reducer is `false`, render a Login Screen
  - if `isAuthenticated` from `auth` reducer is `true`, render a placeholder `PopularMoviesScreen`
- add a way to navigate to the Profile screen so that the user can log out

### 6. Fetch data from an API

- set up [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for fetching and caching data
- define an endpoint to retrieve a list of movies ordered by popularity: https://developer.themoviedb.org/reference/movie-popular-list
- you will need to register and retrieve API credentials

### 7. Popular movies screen

- use the data fetched in the previous section to render a list of popular movies
- use components from GlueStack for rendering items in the list
- show movie poster, movie name, year and rating, at a minimum

### 8. Movie details screen

- define a new navigation route which requires a param - a movie ID
- define a new endpoint in RTK query to fetch movie details - https://developer.themoviedb.org/reference/movie-details
- navigate to the new screen
- fetch movie details
- display a loading indicator while data is loading
- handle errors
- navigate back and forth and watch RTK Query cache behavior
- make sure you properly type the navigators and screens: https://reactnavigation.org/docs/typescript/

### 9. Write some tests

- use https://callstack.github.io/react-native-testing-library/
- coverage is not important, different use cases are
- make sure you don't make common mistakes: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

### 10. Setup a Bottom Tab navigator (advanced)

- learn about nesting navigators: https://reactnavigation.org/docs/nesting-navigators/
- move Popular Movies screen in a bottom tab
- add a new tab (Latest Movies or any other list of movies)
- handle navigation to movie details screen from different tab screens

### 11. Pull to refresh (advanced)

- implement pull to refresh: https://reactnative.dev/docs/flatlist#onrefresh
- refetch the popular movie data when user trigger pull to refresh

### 12. Infinite scrolling (advanced)

- load more items when scrolling to the end of the list
- pull to refresh to reload the entire list

### 13. Favorite movies (advanced)

- add a new Redux Toolkit slice to store a list of favorite movies
- add a new tab to list favorite movies
- add buttons on the lists and the movie details page to add/remove from the list of favorite movies

### 14. Dark theme (optional)

- add support for dark theme
- add a settings screen that allows switching between light and dark theme
- keep the settings in a new Redux Toolkit slice and make sure to persist them
