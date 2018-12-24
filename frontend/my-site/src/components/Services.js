import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider } from '@material-ui/core';

const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
    },
    paperWhite: {
        paddingTop: themeRedGeese.spacing.unit * 5,
        paddingBottom: themeRedGeese.spacing.unit * 5,
        height: '100%',
        textAlign: 'center',
        borderRadius: 0,
    },
    dividerSm: {
        marginRight: '30%',
        marginLeft: '30%',
    },
    titleBanner: {
        paddingTop: themeRedGeese.spacing.unit * 1,
        paddingBottom: themeRedGeese.spacing.unit * 3,
    },
    bodyBanner: {
        paddingTop: themeRedGeese.spacing.unit * 3,
        paddingBottom: themeRedGeese.spacing.unit * 2.5,
        paddingLeft: themeRedGeese.spacing.unit * 8,
        paddingRight: themeRedGeese.spacing.unit * 8,
        textAlign: 'justify'
    },
});

function Services(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paperWhite} elevation={1}>
                <Typography variant="h3" className={classes.titleBanner}>
                    What I Do?
                </Typography>
                <Divider className={classes.dividerSm} variant="middle" elevation={1} />
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

Services.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);