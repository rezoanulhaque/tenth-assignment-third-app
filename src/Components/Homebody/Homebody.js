import React from 'react';
import { Link } from 'react-router-dom';
import './Homebody.css';

const Homebody = (props) => {
    const { name, img, key} = props.vw;
    return (
        <div className="col-md-3">
            <div style={{marginLeft: '30px'}}>
                <Link to={"/register/"+name}><img style={{height: '300px'}} src={img} alt="" /><h2>{name}</h2></Link>
            </div>
        </div>
    );
};

export default Homebody;