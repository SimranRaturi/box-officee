/* eslint-disable */
import React from "react";
import { Switch, Route } from 'react-router-dom'

 import Navs from './components/Navs'; 
 import Home from './pages/Home';
import Starred from "./pages/Starred";

function App() {
  return (
    <div>
    <Navs />
   <Home />


    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route>
        <div>
          Not found
        </div>
      </Route>
    </Switch>
    </div>
  );
  
}

export default App;
