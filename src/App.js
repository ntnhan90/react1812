import React, { Component } from 'react';
// import { Sample } from './components/screens/Sample';
import { Word } from './components/shared/Word';

class App extends Component {
  render() {
    const word1 = { en: 'One', vn: 'Mot', isMemorized: true };
    const word2 = { en: 'Two', vn: 'Hai', isMemorized: false };
    const word3 = { en: 'Three', vn: 'Ba', isMemorized: true };
    return (
      <div className="App">
        <Word wordInfo={word1} />
        <Word wordInfo={word2} />
        <Word wordInfo={word3} />
      </div>
    );
  }
}

export default App;
