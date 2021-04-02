import axios from 'axios';
import React, { useState,useContext,useEffect } from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import { UserContext } from '../../App';
import './Admin.css';
import Mangeproducts from '../Manageproducts/Mangeproducts';

const Admin = () => {

  const [sneakers, setSneakers] = useState([]);

  useEffect(() =>{
      fetch('http://localhost:5055/sneakers')
      .then(response => response.json())
      .then(data => setSneakers(data))
  }, [])

  console.log(sneakers);
  const [loggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setIMageURL] = useState(null);



const onSubmit = data => {
  const eventData = {
    name: data.name,
    price: data.price,
    imageURL: imageURL
  };
  const url = `http://localhost:5055/addProduct`;
  console.log(eventData)
  
  fetch(url, {
    method: 'POST', 
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  .then(res => console.log('server side response', res))
};

const handleImageUpload = event => {
  console.log(event.target.files[0])
  const imageData = new FormData();
  imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb');
  imageData.append('image', event.target.files[0]);
  
  axios.post('https://api.imgbb.com/1/upload', 
  imageData)
  .then(function (response) {
    setIMageURL(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });

}
return (
  <div className="admin">

    <Header name={loggedInUser.displayName}></Header>
    <h4 className="text mt-5">Add Product</h4>
    <form className="loginForm mt-5" onSubmit={handleSubmit(onSubmit)}>
    
        <input className="userInput form-control" name="name" defaultValue="Product Name" ref={register} />
        <input className="userInput form-control" name="price" defaultValue="Product Price" ref={register} />
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <input type="submit" className="btn btn-danger text-warning" />
  </form>
  <h4 className="text mt-5">Edit Product</h4>
  <div className="product-add container mt-5">
                    {
                        sneakers.map(sneakers => <Mangeproducts  sneakers={sneakers}></Mangeproducts>)
                    }
      </div>

  
                    
               
    </div>
);
};

export default Admin;