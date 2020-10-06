import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    const [userWork, setUserWork] = useState([]);
    const history = useHistory();
    useEffect (()=>{
        fetch('https://thawing-harbor-87915.herokuapp.com/volunteerdetailsadmin')
        .then(res => res.json())
        .then(data => setUserWork(data))
    },[])
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
    return (
        <div>
            <Header></Header>
            <button><Link to="/addevent">Add Events</Link></button>
            {
                userWork.map(uw=> <div>
                    <h5>{uw.name}</h5><br/>
                    <p>{uw.organize}</p><br/>
                    <p>{uw.date}</p><br/>
                    <p>{uw.email}</p><br/>
                    <button onClick={()=>cancelWork(uw._id)}>cancel</button>
                    </div>)
            }
        </div>
    );
};

export default Admin;