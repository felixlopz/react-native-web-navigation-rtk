import React from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import {Navigation} from './screens';
import {store, initApplication, dispatch} from './store';

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
