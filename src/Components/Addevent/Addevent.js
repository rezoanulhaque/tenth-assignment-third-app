import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Addevent.css';

const Addevent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data =>{
        const volunteerWork = {...data};
        console.log(data);
        fetch('https://thawing-harbor-87915.herokuapp.com/addVolunteerWork',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerWork)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New Volunteer Work successfully added!');
            }
        })
    }
    return (
        <div className="addevent">
            <h1>Add Events</h1>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="id" ref={register({ required: true })} placeholder="id" /><br/>
                    <input name="name" ref={register({ required: true })} placeholder="Work name" /><br/>
                    <input name="img" ref={register({ required: true })} placeholder="img url"/><br/>
                    
                    <input type="submit" />
                </form>
        </div>
    );
};

export default Addevent;