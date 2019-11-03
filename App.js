import React from 'react';
import {  createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from 'react-navigation-stack';
import { Linking } from 'expo';

import Loading from "./src/screens/Loading";
import Books from "./src/screens/Books";
import Features from "./src/screens/Features";

const BookApp = createStackNavigator({
  Books: {
    screen: Books,
    navigationOptions: {
      headerTitle: "Books",
    },
    path: 'books',
  },
  Features: {
    screen: Features,
    navigationOptions: {
      headerTitle: "Features",
    },
    path: 'features/:bookId',
  },
});

const App = createSwitchNavigator({
  Loading,
  BookApp: {
    screen: BookApp,
    path: '',
  },
});

const AppContainer = createAppContainer(App);

export default () => {
  const prefix = Linking.makeUrl('/');
  console.log(prefix)

  return <AppContainer uriPrefix={prefix} />

};
