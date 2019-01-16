import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
    },
});


function ImageGridList(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            
        </section>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
