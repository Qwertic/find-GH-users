import React from 'react';
import PropTypes from 'prop-types';
import { DiGithubBadge } from "react-icons/di";

const Navbar = ({title}) => {
    return (
        <nav className='navbar bg-primary' >
            <h1> <DiGithubBadge className='react-icons'/> {title}</h1>
        </nav>
    )
};

Navbar.defaultProps = {
    title: 'Github User Finder'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar
