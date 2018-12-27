import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AboutMe from './AboutMe';


const styles = themeRedGeese => ({
    primary: { main: '#000' },
    secondary: { main: '#D50000' },
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navButton:{
        marginLeft: 20,
        marginRight: 20,
    },
    toolbar:{
        sm: 'em',
        md: 'u',
        lg: 'del',
    },
});



function NavBar(props) {
    const { classes } = props;
    return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Kiran Capoor
                        </Typography>
                        <Button className={classes.navButton} variant="contained" color="secondary" id='abbtn'>About Me</Button>
                        <Button className={classes.navButton} variant="text" color="inherit">Portfolio</Button>
                        <Button className={classes.navButton} variant="text" color="inherit">Services</Button>
                        <Button className={classes.navButton} variant="text" color="inherit">My Blog</Button>
                        <Button className={classes.navButton} variant="contained" color="secondary">Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
