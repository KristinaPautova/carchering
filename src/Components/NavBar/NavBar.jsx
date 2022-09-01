import React, {useContext, useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../image/logo.jpeg';
import {Link, NavLink} from "react-router-dom";
import './NavBar.css'
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Auth from "../Auth/Auth";
import {authContext} from "../../context/AuthContext";
import NoCrashIcon from '@mui/icons-material/NoCrash';
import {cartContext} from "../../context/CartContextProvider";
import {favoritesContext} from "../../context/FavoritesContextProvider";
import {carContextFire} from "../../context/CarContextFire";



const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [authBlock,setAuthBlock] = useState(false)
    const {user, handleLogout} = useContext(authContext);
    const {cartLength} = useContext(cartContext);
    const {favoritesLength} = useContext(favoritesContext)
    const {carsArr, getCar} = useContext(carContextFire)



    useEffect(() => {
        getCar()
    },[])



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
        <AppBar position="fixed" style={{backgroundColor:"white", color: "black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavLink to="/">
                        <img width={60} src={logo} alt=""/>
                    </NavLink>

                    {/*<NavLink className='logo' to="/">*/}
                    {/*    NFT*/}
                    {/*</NavLink>*/}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}

                        >

                            <MenuItem  key="Blog" onClick={handleCloseNavMenu}>
                                <Link to='/tutorial' style={{textDecoration: "none", color: "black"}}>
                                    <Typography  textAlign="center">Частые вопросы</Typography>
                                </Link>
                            </MenuItem>
                            {/*{ user && (*/}
                                <MenuItem  key="MarketPlae" onClick={handleCloseNavMenu}>
                                    <Link to='/marketPlace' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">Market Place</Typography>
                                    </Link>
                                </MenuItem>
                            {/*)}*/}

                            {/*{ user && (*/}
                                <MenuItem  key="Cart" onClick={handleCloseNavMenu}>
                                    <Link to='/cart' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">О нас</Typography>
                                    </Link>
                                </MenuItem>
                            {/*)}*/}
                            {/*{ user && (*/}
                                <MenuItem  key="favorite" onClick={handleCloseNavMenu}>
                                    <Link to='/favorite' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">Favorites</Typography>
                                    </Link>
                                </MenuItem>
                            {/*)}*/}

                            {/*{admin === user.email && (*/}
                                <MenuItem  key="AddNft" onClick={handleCloseNavMenu}>
                                    <Link to='/addNft' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">Add nft</Typography>
                                    </Link>
                                </MenuItem>
                            {/*// )}*/}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {/*{ user && (*/}
                            <NavLink to='/about' style={{textDecoration:"none", marginLeft:'10px', }}>
                                <Button
                                    style={{  boxShadow : 'none',
                                        textTransform : 'none'}}
                                    key='marketPlace'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', color: 'rgb(29,86,171)' }}
                                >
                                    О нас
                                </Button>
                            </NavLink>
                        {/*// )}*/}
                        {/*{ user && (*/}
                            <NavLink to='/questions' style={{textDecoration:"none"}}>
                                <Button
                                    style={{  boxShadow : 'none',
                                        textTransform : 'none'}}
                                    key='Feedback'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', color: 'rgb(29,86,171)'  }}
                                >
                                    Частые вопросы
                                </Button>
                            </NavLink>
                        {/*// )}*/}
                        <NavLink to='/' style={{textDecoration:"none"}}>
                            <Button
                                style={{  boxShadow : 'none',
                                    textTransform : 'none'}}
                                key='blog'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2,  display: 'block', color: 'rgb(29,86,171)'  }}
                            >
                                Условия
                            </Button>
                        </NavLink>
                        { user && (
                        <NavLink  to='/rent' style={{textDecoration:"none"}}>
                            <Button
                                style={{  boxShadow : 'none',
                                    textTransform : 'none'}}
                                key='rent'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', color: 'rgb(29,86,171)'  }}
                            >
                                Аренда
                            </Button>
                        </NavLink>
                        )}
                        { user && (
                            <NavLink to='/myCar' style={{textDecoration:"none"}}>
                                <Button
                                    style={{  boxShadow : 'none',
                                        textTransform : 'none'}}
                                    key='myCar'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', color: 'rgb(29,86,171)'  }}
                                >
                                    Мои автомобили
                                </Button>
                            </NavLink>
                        )}
                        { user && (
                            <NavLink to='/chat' style={{textDecoration:"none"}}>
                                <Button
                                    style={{  boxShadow : 'none',
                                        textTransform : 'none'}}
                                    key='Chat'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', color: 'rgb(29,86,171)'  }}
                                >
                                    Комментарии
                                </Button>
                            </NavLink>
                        )}

                        {carsArr.map((item) => (
                            item.owner === user.email && (
                                <NavLink key={Date.now()} to='/rented' style={{textDecoration:"none"}}>
                                    <Button
                                        style={{  boxShadow : 'none',
                                            textTransform : 'none' }}
                                        key='rented'
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block', color: 'rgb(29,86,171)'  }}
                                    >
                                        История заказов
                                    </Button>
                                </NavLink>
                            )
                        )) }
                        {/*{admin === user.email && (*/}
                        {/*    <NavLink to='/addNft' style={{textDecoration:"none"}}>*/}
                        {/*        <Button*/}
                        {/*            style={{  boxShadow : 'none',*/}
                        {/*                textTransform : 'none'}}*/}
                        {/*            key='addNFT'*/}
                        {/*            onClick={handleCloseNavMenu}*/}
                        {/*            sx={{ my: 2,  display: 'block', color: 'rgb(29,86,171)'  }}*/}
                        {/*        >*/}
                        {/*            Добавить*/}
                        {/*        </Button>*/}
                        {/*    </NavLink>*/}
                        {/*// )}*/}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {user &&
                            <>
                                <NavLink className='love' to="/favorite" >
                                    <Badge style={{marginRight:"20px"}} size="large" badgeContent={favoritesLength} color="warning">
                                        <FavoriteIcon />
                                    </Badge>
                                </NavLink>
                                <NavLink className='link' to="/cart" >
                                    <Badge style={{marginRight:"20px"}} size="large" badgeContent={cartLength} color="warning">
                                        <NoCrashIcon/>
                                    </Badge>
                                </NavLink>
                            </>
                        }





                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            { user ?(

                                <MenuItem key='lo' onClick={handleLogout}><Link to='/' style={{textDecoration: "none", color: "black"}}>Выйти</Link></MenuItem>

                                )
                           :
                                <MenuItem key='lop' onClick={handleCloseUserMenu} ><a onClick={() => setAuthBlock(true)} style={{textDecoration: "none", color: "black"}}>Войти</a></MenuItem>
                        }
                            {user && (
                                <MenuItem><Link key='rel' to='/realtime' style={{textDecoration: "none", color: "black"}}>Чат</Link></MenuItem>
                            )}

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
            {authBlock && <Auth authBlock={authBlock} setAuthBlock={setAuthBlock} />}
    </>
    );
};
export default NavBar;