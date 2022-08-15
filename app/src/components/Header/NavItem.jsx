import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavItem(props) {
    const { to, name } = props;

    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal',
            color: 'white',
        }
    }
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