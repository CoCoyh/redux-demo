import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import createStore from './createStore'
import Title from './Title';
import reducer from './reducer'


// store是局部变量，通过props传递给其他组件
const store = createStore(reducer);
class App extends Component {
  constructor(){
    super()

    // state更新重新渲染
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  changeTitle = (newTitle) => {
    store.dispatch({type: "CHANGE_TITLE", newTitle: newTitle})
  }
  render() {
    const {title, content} = store.getState()
    return(
      <div>
        <Title store = {store}></Title>
        <p>{content}</p>
        <button onClick = {() => this.changeTitle('新的标题')}>修改标题</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
