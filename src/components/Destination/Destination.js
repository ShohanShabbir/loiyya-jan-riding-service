import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';

import { useForm } from 'react-hook-form';


import Header from '../Header/Header';
import { UserContext } from '../../App';
import './Destination.css';

const Destination = () => {
     
   
       
   
    const [loggedInUser] = useContext(UserContext);
    const { rideName } = useParams();

   
    const { register, handleSubmit, errors } = useForm();
    const [rideInfo, setRideInfo] = useState({});
    const onSubmit = data => setRideInfo(data);




    return (
        <div className="container">
            <Header name={loggedInUser.displayName}></Header>

            <h2>CheckOut Table</h2>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                   
                </tr>
                <tr>
                    <td></td>
                    <td>1</td>
                    <td></td>
                </tr>
        </table> 
        <button className="btn-primary">Checkout</button>    
        </div>
    );
};

export default Destination;