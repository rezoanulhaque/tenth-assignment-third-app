import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const UserWorkDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userWork, setUserWork] = useState([]);
    let history = useHistory();
    const cancelWork = id =>{
        fetch('https://thawing-harbor-87915.herokuapp.com/delete/'+id,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                history.push('/userworkdetails');
            }
        })
    }
    useEffect(()=>{
        fetch('https://thawing-harbor-87915.herokuapp.com/volunteerdetails?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserWork(data))
    },[])
    
    return (
        <div>
            <Header></Header>
            {
                userWork.map(uw=> <div><h5>{uw.name}</h5><br/><p>{uw.description}</p><p>{uw.date}</p><br/><button onClick={()=>cancelWork(uw._id)}>cancel</button></div>)
            }
            
        </div>
    );
};

export default UserWorkDetails;