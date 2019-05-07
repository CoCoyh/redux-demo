import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import createStore from './createStore'
import Title from './Title';
import reducer from './reducer'

import {Provider, connect} from './connect'

const store = createStore(reducer);
// 在context里传递store

class App extends Component {
  render() {
    const {content} = store.getState()
    return(
      <div>
        <Title></Title>
        <p>{content}</p>
        <button>修改标题</button>
      </div>
    )
  }
}

App = connect()(App)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
