import React from "react";
import Homepage from './Components/Homepage'
import {Link, Route, Switch} from 'react-router-dom'
import Form from './Components/Form'

const App = () => {
  return (
  
    <div>
      <header>
        <nav>
            <h1>Lambda Eats!</h1>
            <div className = 'nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/pizza' id='order-pizza'>Pizza Creation</Link>
            </div>
         </nav>
     </header>
    
    <Switch>
      <Route path='/pizza'>
        <Form />
      </Route>
      <Route path='/'>
        <Homepage/>
      </Route>
    </Switch>

    </div>
  );
};
export default App;
