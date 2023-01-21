import React,{useState} from "react";
import Homepage from './Components/Homepage'
import {Link, Route, Switch} from 'react-router-dom'
import Form from './Components/Form'
import schema from './validation/Schema';
import * as yup from 'yup';
import axios from 'axios'

const intialFormValues = {
  name:'',
  size:'',
  special:'',
  topping1:false,
  topping2:false,
  topping3:false,
  topping4:false,
}

const intialFormErrors ={
  name:'',
  size:'',
  toppings:''
}

const App = () => {
  const [formValues,setFormValues]= useState(intialFormValues)
  const [formErrors, setFormErrors]=useState(intialFormErrors)
  const [orders, setOrders] = useState([])

  const handleSubmit =() => {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      setOrders([res.data, ...orders])
      console.log(res.data)
    })
    .catch(err => console.error(err))
    .finally(()=>setFormValues(intialFormValues))
}

  const validate = (name,value) => {
    yup.reach(schema, name)
    .validate(value)
    .then( () => setFormErrors({...formErrors, [name]: ''}))
    .catch( err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name,value) => {
    validate(name,value)
    setFormValues({...formValues, [name]:value})
  }

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
        <Form 
          values={formValues}
          submit={handleSubmit}
          change={handleChange}
          errors={formErrors}
        
        />
      </Route>
      <Route path='/'>
        <Homepage/>
      </Route>
    </Switch>

    </div>
  );
};
export default App;
