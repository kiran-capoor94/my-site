import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconList from "./IconList";

const styles = themeRedGeese => ({
    root: {

    },
    paperFixed: {
        flexGrow: 1,
        position:'fixed',
        height: '100%',
        maxHeight: '87vh',
        [themeRedGeese.breakpoints.between('md','lg')]: {
            maxHeight: '87vh',
        },
        [themeRedGeese.breakpoints.only('lg')]: {
            maxHeight: '88.5vh',
        },
        textAlign: 'center',
        paddingTop: themeRedGeese.spacing.unit * 4.6,
        borderRadius: 0,
        backgroundImage: "url(static/images/man-1.svg)",
        backgroundSize: "373px 464px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        // boxShadow: 'none',
        backgroundOrigin: 'content-box',
    },
    titleName: {
        textAlign: 'left',
        paddingTop: themeRedGeese.spacing.unit * 46,
        paddingLeft: themeRedGeese.spacing.unit * 5,
        paddingBottom: themeRedGeese.spacing.unit * 1,
        paddingRight: themeRedGeese.spacing.unit * 5,
        
        [themeRedGeese.breakpoints.between('lg','xl')]: {
            paddingTop: themeRedGeese.spacing.unit * 42,
            paddingRight: themeRedGeese.spacing.unit * 5.2,
            fontSize: '5vw',
        },
        [themeRedGeese.breakpoints.up('xl')]: {
            paddingTop: themeRedGeese.spacing.unit * 46,
            paddingRight: themeRedGeese.spacing.unit * 8.2,
            fontSize: '7vw'
        }
    },
    subtitleBanner: {
        textAlign: 'left',
        paddingLeft: themeRedGeese.spacing.unit * 5,
        paddingTop: themeRedGeese.spacing.unit * 2,
        paddingBottom: themeRedGeese.spacing.unit * 0.5,

        [themeRedGeese.breakpoints.down('xl')]: {
            fontSize: '3vw'
        }

    }

});

function RightBanner(props) {
    const { classes } = props;
    return (
        <Paper className={classes.paperFixed}>
            {/* <CardMedia src="/static/images/man-1.png" className={classes.bgFace}/> */}
            {/* <Paper className={classes.bgFace}>
            </Paper> */}
            <Typography variant="h1" color="secondary" className={classes.titleName}>
                Kiran Capoor
            </Typography>
            <Typography variant="h3" color="primary" className={classes.subtitleBanner}>
                Software Engineer
            </Typography>
            <IconList />
        </Paper>
    );

}

RightBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightBanner);