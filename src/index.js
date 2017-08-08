import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// create store
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

// change this component to get start
class App extends Component {
  render() {
    return (
      <div>
        <h1>React - Redux Project</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App/>
  </Provider>,
  document.getElementById('root')
)