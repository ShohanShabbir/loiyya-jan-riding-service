import React, { useContext, useEffect, useState }  from 'react';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import userEvent from '@testing-library/user-event';

const Order = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/order',{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])
    const [loggedInUser] = useContext(UserContext);
    return (
        <div>
             <Header name={loggedInUser.displayName}></Header>
            
            <div className="order-card container mt-5">
            {
                order.map(order => <OrderDetails key={order._id} order={order}></OrderDetails>)
            }
            </div>
        </div>
    );
};

export default Order;