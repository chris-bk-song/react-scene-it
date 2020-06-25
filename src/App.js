import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MovieSearch from './components/MovieSearch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MovieSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
