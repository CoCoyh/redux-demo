import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// reducer状态处理函数
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

// 引入reducer
import reducer from './reducers' // 默认引入index.js

// 引入action
import {add_one} from './action'

const store = createStore(reducer)

// 计数器
class App extends Component {
  render() {
    const {count, add_one} = this.props
    return (
      <div>{count}
        <button onClick = {add_one}>点一下加1</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.reducer.count  // 引入combine使reducer多了一层
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add_one: () => {
      dispatch(
        add_one()
      )
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
