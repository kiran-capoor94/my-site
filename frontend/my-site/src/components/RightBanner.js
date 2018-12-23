import React from "react";
import PropTypes from 'prop-types';
// import Backdrop from '@material-ui/core/Backdrop';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconList from "./IconList";

const styles = themeRedGeese => ({
    root: {

    },
    paperFixed: {
        flexGrow: 1,
        position:'fixed',
        height: '94vh',
        maxHeight: '100%',
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
            <Typography variant="h3" color="primary">
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