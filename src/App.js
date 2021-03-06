import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducer';
import Home from './components/Home/Home'
import AddWord from './components/AddWord/AddWord';
import ListWords from './components/ListWords/ListWords';
import Wrapper from './components/Wrapper/Wrapper';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-word" component={AddWord} />
            <Route exact path="/list-word" component={ListWords} />
          </Router>
        </Wrapper>
      </div>
    </Provider>
  );
}

export default App;
