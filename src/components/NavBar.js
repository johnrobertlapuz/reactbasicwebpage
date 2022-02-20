import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {BottomNavigation, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    logo: {
        width: "8%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "0%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#57FEFF"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <BottomNavigation>
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                
        
                <Typography variant="h4" className={classes.menuItem}>
                   About Me
                </Typography>
                <Typography variant="h4" className={classes.menuItem}>
                    What's New?
                </Typography>
                <Typography variant="h4" className={classes.menuItem}>
                    Hobbies
                </Typography> 
                
            </Toolbar>
            </BottomNavigation>
    )
}

export default NavBar
