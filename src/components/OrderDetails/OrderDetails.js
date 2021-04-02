import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './OrderDetails.css';

const OrderDetails = (props) => {

    const {name,price,imageURL} = props.order
    return (
        <div className="order-card">
            <Card  style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {price}
                            </Card.Text>
                        </Card.Body>
                </Card>
        </div>
    );
};

export default OrderDetails;