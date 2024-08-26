import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './styles'

const OptionsMenu = () => {
    return (
        <>
        <Menu>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/country">
                <h1>Country</h1>
            </Link>    
            <Link to="/continent">
                <h1>Continent</h1>
            </Link>
            <Link to="/subcontinent">
            <h1>Subcontinent</h1>
            </Link>
            <Link to="/language">
                <h1>Language</h1>
            </Link>
        </Menu>
        </>
    );
};

export default OptionsMenu;