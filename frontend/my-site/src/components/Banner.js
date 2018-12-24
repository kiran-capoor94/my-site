import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RightBanner from './RightBanner';
import Hidden from '@material-ui/core/Hidden';
import LeftBanner from "./LeftBanner";


const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        clear: "both",
        marginTop: 64,
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    backdrop: {
        open: true,
        background: '#ECEFF1'
    },
    clearfix: {
        content: "",
        display: 'table',
        clear: "both"
    },
    
});

function Banner(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden xsDown>
                    <Grid item lg={8} md={8} xlg={8}>
                        <LeftBanner />
                    </Grid>
                    <Grid item lg={4} md={4} xlg={4}>
                        <RightBanner />
                    </Grid>
                </Hidden>
            </Grid>
        </div >
    );

}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
