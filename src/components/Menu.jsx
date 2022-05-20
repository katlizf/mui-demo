import React from 'react'
import {AppBar, Button, Toolbar, Typography, Stack} from '@mui/material'
import {Link} from 'react-router-dom'

function Menu() {

  return (
    <AppBar
        position='static'
        color='primary'
        sx={{height: 70, display: "flex", alignItems: "center"}}
        >
            <Toolbar sx={{height: "100%", display: "flex"}}>
                <Typography variant="h4">Site</Typography>
                <Stack sx={{display: "flex", flexDirection: "row"}}>
                    <Link to="/">
                       <Button color="inherit">Home</Button>  
                    </Link>
                    <Link to="/about">
                        <Button color="inherit">About</Button> 
                    </Link>
                </Stack>
            </Toolbar>
            
        </AppBar>
  )
}

export default Menu