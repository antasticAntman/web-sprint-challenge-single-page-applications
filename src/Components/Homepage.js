import React from 'react';
import {Link,Switch,Route} from  'react-router-dom';

import Form from './Form'

const Homepage = () =>{

    return (
        <div className='pizza-img'>
            <p>Thank you for choosing Lambda Eats pizzaria!</p>
            <p>Please press the button and it will take you to the pizza customization page!</p>
            <button><Link to='/pizza'>Press me for Pizza</Link></button>
           
            <img
            className='firstImg'
            src='https://tse1.mm.bing.net/th?id=OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7&pid=Api&P=0'
            alt='Meat lovers supreme'
            />
            <img
            className='secondImg'
            src='https://tse2.mm.bing.net/th?id=OIP.cstklqjr-mZbxRSe1HOr5AHaEq&pid=Api&P=0'
            alt='Pepperoni Pizza'
            />
        </div>
        
    )


}

export default Homepage