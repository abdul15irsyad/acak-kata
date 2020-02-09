import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AddWord from './components/AddWord/AddWord';
import ListWords from './components/ListWords/ListWords';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add-word" component={AddWord}/>
        <Route exact path="/list-word" component={ListWords}/>
      </Router>
    </div>
  );
}

export default App;
