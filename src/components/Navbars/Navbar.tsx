import React from 'react';
import navbarStyle from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

type NavItemType = {
    itemName: string;
    urlName: string;
}

const NavItem = (props: NavItemType) => {
    return (
        <div className={navbarStyle.item}>
            <NavLink to={props.urlName} activeClassName={navbarStyle.activeLink}>{props.itemName}</NavLink>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className={navbarStyle.navs}>
            <NavItem urlName='/profile' itemName='Profile' />
            <NavItem urlName='/messages' itemName='Messages' />
            <NavItem urlName='/news' itemName='News' />
            <NavItem urlName='/music' itemName='Music' />
            <NavItem urlName='/settings' itemName='Settings' />
            <NavItem urlName='/video' itemName='Video' />
        </nav>
    );
}

export default Navbar;



