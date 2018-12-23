import React from "react";
import PropTypes from 'prop-types';
// import Backdrop from '@material-ui/core/Backdrop';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RightBanner from './RightBanner';
import Hidden from '@material-ui/core/Hidden';


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
    paperRed: {
        paddingTop: themeRedGeese.spacing.unit * 100,
        paddingBottom: themeRedGeese.spacing.unit * 100,
        height: '100%',
        textAlign: 'center',
        background: themeRedGeese.palette.secondary.main,
        borderRadius: 0,
        color: 'white'
    }
});

function Banner(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden xsDown>
                    <Grid item lg={8} md={8}>
                        <Paper className={classes.paperRed}>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Kiran Capoor
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <RightBanner />
                    </Grid>
                </Hidden>
            </Grid>
            <Hidden smUp>
                <Grid container spacing={0}>
                    <Grid item xs>
                        <Paper className={classes.paperRed}>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Kiran Capoor
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Hidden>

        </div >
    );

}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
