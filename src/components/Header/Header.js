import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import './Header.css';
import {NavDropdown} from 'react-bootstrap';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const signOut = () => {
        firebase.auth().signOut().then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser) ;
        }).catch(err => {
            console.log(err);
            console.log(err.message)
        })
    };
    
    const name = loggedInUser.displayName;
    
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="#">Sneakers-World</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/destination" className="nav-link">Checkout</Link>
                            <Link to="/order" className="nav-link">Orders</Link>
                            <Link to="/admin" >

                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Add Product</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Edit Product</NavDropdown.Item>
                            </NavDropdown>
                                
                            </Link>

                         

                        
                            
                            {
                                loggedInUser.email ? <button className="btn btn-danger me-2 ml-2" onClick={signOut}>Log Out</button>:<Link to="/login" className="btn btn-success">Login</Link>
                            }
                            {name && <button className="btn btn-primary ml-3">{name}</button>}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;