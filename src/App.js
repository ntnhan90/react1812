import React, { Component } from 'react';
// import { StateExam } from './components/screens/StateExam';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ListWord } from './components/screens/ListWord';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListWord />
      </Provider>
    );
  }
}

export default App;
