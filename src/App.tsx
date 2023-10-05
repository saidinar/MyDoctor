import React, { useState } from 'react';
import { GetStarted } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

const MainApp = () => {
  const {loading} : any = useSelector(state => state);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <Loading />}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;
