import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider } from '@material-ui/core';

const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
    },
    paperRed: {
        paddingTop: themeRedGeese.spacing.unit * 5,
        paddingBottom: themeRedGeese.spacing.unit * 5,
        height: '100%',
        textAlign: 'center',
        background: themeRedGeese.palette.secondary.main,
        borderRadius: 0,
        color: 'white'
    },
    dividerSm: {
        marginRight: '30%',
        marginLeft: '30%',
        backgroundColor: 'white',
    },
    titleBanner: {
        paddingTop: themeRedGeese.spacing.unit * 1,
        paddingBottom: themeRedGeese.spacing.unit * 3,
        color: 'white'
    },
    bodyBanner: {
        paddingTop: themeRedGeese.spacing.unit * 3,
        paddingBottom: themeRedGeese.spacing.unit * 2.5,
        paddingLeft: themeRedGeese.spacing.unit * 8,
        paddingRight: themeRedGeese.spacing.unit * 8,
        color: 'white',
        textAlign: 'justify'
    },
});

function AboutMe(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paperRed} elevation={1}>
                <Typography variant="h3" className={classes.titleBanner}>
                    About Me
                </Typography>
                <Divider className={classes.dividerSm} variant="middle" elevation={4} />
                <Typography variant="body1" className={classes.bodyBanner}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" className={classes.bodyBanner}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" className={classes.bodyBanner}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" className={classes.bodyBanner}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" className={classes.bodyBanner}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </Paper>
        </div>
    );
}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutMe);