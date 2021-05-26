/* eslint-disable */
import React from "react";
import { Switch, Route } from 'react-router-dom'
  

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        This is start
      </Route>

      <Route>
        this is 404 eroor
      </Route>
    </Switch>
  );
  
}

export default App;
