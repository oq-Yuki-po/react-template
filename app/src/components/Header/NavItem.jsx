import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import { NavLink } from 'react-router-dom';

export const navLinkStyles = ({ isActive }) => {
    return {
        textDecoration: 'none',
        color: isActive ? '#e6892d' : "white"
    }
}

export default function NavItem(props) {
    const { to, name } = props;

    return (
        <Typography variant="h5" component={NavLink} to={to} style={navLinkStyles}>
            {name}
        </Typography>

    )
}

NavItem.propTypes = {
    name: PropTypes.string,
    to: PropTypes.string
};