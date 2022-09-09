import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from  './MainHeader.module.css';


const MainHeader = () => {
  return (
    <div>
        <header className={classes.header}>
           <nav>
            <ul>
                <li>
                    <NavLink  to="/aboutus">AboutUS</NavLink>
                </li>
                <li>
                    <NavLink to="/usereview">UserReview</NavLink>
                </li>
            </ul>
           </nav>
        </header>
    </div>
  )
}

export default MainHeader