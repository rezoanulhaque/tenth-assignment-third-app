import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/group 1329.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header flex-container">
            <div className="nav">
                <img src={logo} alt="" />

            </div>
            <div className="nav links" >
                <Link to="/home">Home</Link>
                <Link to="/donation">donation</Link>
                <Link to="/addevent">Event</Link>
                <Link to="/blog">Blog</Link>
                {
                    loggedInUser.email ? <h4>{loggedInUser.name}</h4> :
                    (<button><Link to="/login">Login</Link></button>)
                }
                <button><Link to="/admin">admin</Link></button>
            </div>
        </div>
    );
};

export default Header;