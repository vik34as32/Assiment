import React from "react";
import { NavLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';


const NavBar = () => {
    return (
        <> 
            <nav className="navbar navbar-expand-lg light bg-dark">
                <a className="navbar-brand" href="#">E-Commm</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink  className="nav-link" to="/">List Of Items</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/my-wishtlist"><span>My Wishtlist</span><FavoriteIcon/></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}



export default NavBar