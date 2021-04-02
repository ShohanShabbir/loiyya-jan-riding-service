

import './Home.css'

import Products from '../Products/Products';
import Header from '../Header/Header';
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {


    const [sneakers, setSneakers] = useState([]);


    useEffect(() =>{
        fetch('http://localhost:5055/sneakers')
        .then(response => response.json())
        .then(data => setSneakers(data))
    }, [])
    
   
    return (
        <div className="home-background">
            <div className="container">
            <Header></Header>
                <div className="row Products">
                    {
                        sneakers.map(sneakers => <Products  sneakers={sneakers}></Products>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;