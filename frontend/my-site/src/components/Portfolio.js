import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { Paper, Typography, Divider, Grid, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';

const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
    },
});

function Services(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        </div>
    );
}

Services.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);