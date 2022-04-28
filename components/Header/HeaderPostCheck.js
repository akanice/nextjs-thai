/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {AiOutlineMenu} from 'react-icons/ai';
import {RiRefreshFill} from 'react-icons/ri';
import {FaUser} from 'react-icons/fa';

const HeaderPostCheck = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {/* <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem> */}
        </Menu>
    );

    return (
        <>
            <div position="relative" className={`bg-cyan-500 flex justify-between items-center text-white`}>
                <Toolbar className="">
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <img src="/images/logo_PVcombank1 1.png" />
                    </Typography>
                    
                    <Box sx={{ display: { xs: 'flex' } }} className={`mr-3`}>
                        <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <AiOutlineMenu size={28} />
                        </IconButton>
                    </Box>
                    <h1 className={`uppercase text-md font-bold`}>Hậu kiểm EKYC và mở TTKT khách hàng tổ chức</h1>
                </Toolbar>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={`items-center mr-2`}>
                    <RiRefreshFill size={`28`} className={`mr-2`}/>
                    <div className={`flex flex-col items-center mr-2`}>
                        <span className={`text-yellow-300 font-bold text-sm`}>Vũ Thị Thu Trang</span>
                        <div onClick={``} className={`underline`}>[Thoát]</div>
                    </div>
                    <div className={`avatar rounded-full`}>
                        <FaUser size={`22`} />
                    </div>
                </Box>
            </div>
            {renderMobileMenu}
            {renderMenu}
        </>
    );
};

export default HeaderPostCheck;
