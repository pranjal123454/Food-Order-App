import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals11.jpg';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom'


const Header = (props) => {
  return (
    <Fragment>
      
      <header className={classes.header}>
        <div>
        <header >
           <nav>
            <ul className='List'>
                <li>
                   <span> <NavLink  to="/aboutus">AboutUS</NavLink> </span>
                </li>
                <li>
                    <span><NavLink to="/usereview">UserReview</NavLink></span>
                </li>
            </ul>
           </nav>
        </header>
        </div>
        <h1>Yo Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
