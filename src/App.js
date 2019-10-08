import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
