import React from 'react';
import ChessScreen from '../ChessScreen/ChessScreen';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ChessScreen />
      </div>
    </Provider>
  );
}

export default App;
