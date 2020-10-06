import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Header2 from '../Header2/Header2';
import Homebody from '../Homebody/Homebody';

const Home = () => {
    const [volunteerWorks, setVolunteerWorks] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-harbor-87915.herokuapp.com/workdetails')
        .then(res=>res.json())
        .then(data=>setVolunteerWorks(data))
    },[])
    return (
        <div className="home">
            <Header></Header>
            <Header2></Header2>
            <div className="row">
            {
                volunteerWorks.map(vw =><Homebody key={vw.key} vw={vw} ></Homebody>)
            }
            </div>
        </div>
    );
};

export default Home;