import { Typography, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { navLinkStyles } from './NavItem';

export default function NavItemList(props) {
    const { to, name, nameList, toList } = props;

    const nameAndToList = nameList.map(function (e, i) {
        return [e, toList[i]];
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <Typography variant="h5" onClick={handleMenu} component={NavLink} to={to} style={navLinkStyles}>
                {name}
            </Typography>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {nameAndToList.map(([name, to]) => (
                    <MenuItem key={name} onClick={() => { navigate(to); setAnchorEl(null) }}>{name}</MenuItem>
                )
                )}
            </Menu>
        </div>
    )
}

NavItemList.propTypes = {
    name: PropTypes.string,
    to: PropTypes.string,
    nameList: PropTypes.array,
    toList: PropTypes.array
};