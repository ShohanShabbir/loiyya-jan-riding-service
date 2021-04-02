
import { useEffect, useState,useContext } from 'react';
import { useHistory } from 'react-router';
import './Product.css';
import { UserContext } from '../../App';
import {Card,Button} from 'react-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Products = (sneakers) => {

    const {name, price , imageURL} = sneakers.sneakers;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    
        
   const handleProduct= () =>{

    const cardData = {
        name: sneakers.sneakers.name,
        price: sneakers.sneakers.price,
        imageURL: sneakers.sneakers.imageURL,
        
    };
        const eventData ={ ...cardData}
        const url = `http://localhost:5055/addOrder`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(eventData)
        })
        .then (res => console.log('server', res))
    }

   
  
    const history = useHistory();
    const handleClick = () => {
        history.push(`/destination`)
        const cardData = {
            name: sneakers.sneakers.name,
            price: sneakers.sneakers.price,
            imageURL: sneakers.sneakers.imageURL
        };
        console.log(cardData)
        
        
    }
    return (
        <div className="mb-5 col-lg-3 col-sm-6 product mt-5" >

             <Card  style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {price}
                            </Card.Text>
                            <Button onClick={()=> handleClick(sneakers._id)} variant="dark"> <FontAwesomeIcon icon={faShoppingCart} /></Button>
                            <Button onClick={()=> handleProduct(loggedInUser)} variant="dark">Buy Now</Button>
                        </Card.Body>
                </Card>
        </div>

    );
};

export default Products;