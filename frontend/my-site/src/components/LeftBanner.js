import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import MyBlog from "./MyBlog";



const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
        height:'90.5vh',
        maxHeight: '87vh',
        [themeRedGeese.breakpoints.between('md','lg')]: {
            maxHeight: '87vh',
        },
        [themeRedGeese.breakpoints.only('lg')]: {
            maxHeight: '90.5vh',
        },
    }, 
});

function LeftBanner(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AboutMe />
            <Services />
            <Portfolio />
            <MyBlog />
        </div>
    );

}

LeftBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftBanner);