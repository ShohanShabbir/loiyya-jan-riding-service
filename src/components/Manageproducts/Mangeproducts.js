import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './Manageproducts.css';
import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mangeproducts = (sneakers) => {

    const {name, price , imageURL,_id} = sneakers.sneakers;

    const deleteProduct = (id) =>{
       fetch(`http://localhost:5055/delete/${_id}`, {
           method: 'DELETE'
       })
       .then (res => res.json())
       .then (result =>{
           console.log('deleted');
       })
    }
    return (
        <div>
                <Card  style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {price}
                            </Card.Text>
                            <Button  variant="primary"> <FontAwesomeIcon icon={faEdit} /></Button>
                            <Button onClick={()=>deleteProduct(_id)} variant="danger"> <FontAwesomeIcon icon={faTrashAlt} /></Button>
                        </Card.Body>
                </Card>
        </div>
    );
};

export default Mangeproducts;