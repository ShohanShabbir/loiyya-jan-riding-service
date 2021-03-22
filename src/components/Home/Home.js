

import './Home.css'
import rideList from '../../data/data.json'
import Rides from '../Rides/Rides';
import Header from '../Header/Header';
const Home = () => {
    
   
    return (
        <div className="home-background">
            <div className="container">
            <Header></Header>
                <div className="row rides">
                    {
                        rideList.map(ride => <Rides key={ride.rideNumber} ride={ride}></Rides>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;