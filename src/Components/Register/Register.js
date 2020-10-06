import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/group 1329.png';
import './Register.css';


const Register = () => {
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const volunteerProfile = {...data};
        fetch('https://thawing-harbor-87915.herokuapp.com/volunteerProfile',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerProfile)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New Profile successfully added!');
            }
        })
    }
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="register">
            <div >
                <img src={logo} alt="" />
            </div>
            <div className="registerform">
                <h2>Register as a Volunteer</h2>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name}  ref={register({ required: true })} placeholder="Full Name" /><br/>
    
                    <input name="email" defaultValue={loggedInUser.email}  ref={register({ required: true })}placeholder="Username or Email" /><br/>
                    <input type="date" name="date" id="" ref={register({ required: true })}/><br/>

                    <input name="description"  ref={register({ required: true })} placeholder="Description" /><br/>
                    
                    <input name="organize" defaultValue={name} ref={register({ required: true })} placeholder="Organize books at the library" /><br/>
                    
                    <input type="submit" />
                </form> 
                <button><Link to="/userworkdetails">WorkDetails</Link></button>
            </div>
        </div>
    );
};

export default Register;