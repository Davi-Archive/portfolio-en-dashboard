import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Drawer,
  List,
  Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '../components/listItems';

const Header = () => {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  /* const isLoggedIn = useSelector(state => state.isLoggedIn) */
  const isLoggedIn = true;
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (

    <AppBar sx={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(98,98,255,1) 0%, rgba(0,212,255,1) 100%)',
    }}>
      <Toolbar>
        {isLoggedIn && <Box display="flex" marginLeft="auto">
          <Tabs
            textColor="inherit"
            value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={Link} to="/" label="View" />
            <Tab LinkComponent={Link} to="/" label="Add new" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && <> <Button
            LinkComponent={Link} to="/login"
            variant='contained'
            sx={{ margin: 1, borderRadius: 10 }}
            color='warning'>Login
          </Button>
            {/* <Button
              LinkComponent={Link} to="/register"
              variant='contained'
              sx={{ margin: 1, borderRadius: 10 }}
              color='warning'>Signup
            </Button> */}
          </>}
          {isLoggedIn && <Button
            onClick={() => dispatch(logout())}
            LinkComponent={Link} to="/logout"
            variant='contained'
            sx={{ margin: 1, borderRadius: 10 }}
            color='warning'>Logout
          </Button>}
        </Box>
      </Toolbar>
      <Drawer variant="permanent">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <Typography variant='h4'>Dashboard</Typography>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header