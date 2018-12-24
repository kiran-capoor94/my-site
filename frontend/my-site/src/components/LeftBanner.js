import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AboutMe from "./AboutMe";
import Services from "./Services";

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    
});

function LeftBanner(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AboutMe />
            <Services />
        </div>
    );

}

LeftBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftBanner);