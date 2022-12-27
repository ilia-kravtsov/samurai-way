import React from 'react';
import navbarStyle from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={navbarStyle.navs}>
            <div className={navbarStyle.item}>
                <NavLink to='/profile' activeClassName={navbarStyle.activeLink}>Profile</NavLink>
            </div>
            <div className={`${navbarStyle.item} ${navbarStyle.active}`}>
                <NavLink to='/dialogs' activeClassName={navbarStyle.activeLink}>Messages</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink to='/news' activeClassName={navbarStyle.activeLink}>News</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink to='/music' activeClassName={navbarStyle.activeLink}>Music</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink to='/settings' activeClassName={navbarStyle.activeLink}>Settings</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink to='/feed' activeClassName={navbarStyle.activeLink}>Feed</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

/*
* let c1 = "item";
* let c2 = "active";
* let classes = c1 + " " + c2; => the same
* let classesNew = `${c1} ${c2}` => the same
*/

