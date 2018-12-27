import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Grid, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';

const styles = themeRedGeese => ({
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
        paddingTop: themeRedGeese.spacing.unit * 4,
        paddingBottom: themeRedGeese.spacing.unit * 3,
    },
    bodyBanner: {
        // height: '100%',
        paddingTop: themeRedGeese.spacing.unit * 5,
        // paddingBottom: themeRedGeese.spacing.unit * 0.5,
        paddingLeft: themeRedGeese.spacing.unit * 12,
        paddingRight: themeRedGeese.spacing.unit * 10,
        textAlign: 'center'
    },
    serviceCard: {
        textAlign: 'center',
        borderColor: 'secondary',
    },
    card: {
        margin: 'auto',
        maxWidth: 250,
        maxHeight: 250,
    },
    cardDark: {
        backgroundColor: '#212121',
        // color: '#fff!important',
        maxHeight: 250,
        maxWidth: 250,
        margin: 'auto',
        // marginRight: 0,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        backgroundSize: '100px 100px',
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardText: {
        textAlign: 'center',
        margin: 'auto',
        // paddingTop: themeRedGeese.spacing.unit *
        // color: '#fff',
    },
});

function Services(props) {
    const { classes } = props;
    return (
        <Paper className={classes.paperWhite} elevation={4} component={"section"}>
            <Typography variant="h3" className={classes.titleBanner}>
                What I Do?
                </Typography>
            <Divider className={classes.dividerSm} variant="middle" elevation={3} />
            <Grid container spacing={32} className={classes.bodyBanner}>
                <Grid item lg={6} className={classes.serviceCard}>
                    <Card className={classes.card} elevation={4}>
                        <CardContent>
                            <CardMedia className={classes.media} image="/static/images/icons/postgresql.svg" title="Database Management" width="100px" height='100px' />
                            <CardActions>
                                <Button variant="contained" color='primary' className={classes.cardText}>Database Management</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} className={classes.serviceCard}>
                    <Card className={classes.cardDark} elevation={4}>
                        <CardContent>
                            <CardMedia className={classes.media} image="/static/images/icons/www.svg" title="Database Management" width="100px" height='100px' />
                            <CardActions>
                                <Button variant="contained" color="secondary" className={classes.cardText}>Website Development</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={classes.bodyBanner}>
                <Grid item lg={6} className={classes.serviceCard}>
                    <Card className={classes.cardDark} elevation={4}>
                        <CardContent>
                            <CardMedia className={classes.media} image="/static/images/icons/docker.svg" title="Database Management" width="100px" height='100px' />
                            <CardActions>
                                <Button variant="contained" color="secondary" className={classes.cardText}>Infrastructure Management</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} className={classes.serviceCard}>
                    <Card className={classes.card} elevation={4}>
                        <CardContent>
                            <CardMedia className={classes.media} image="/static/images/icons/python.svg" title="Database Management" width="100px" height='100px' />
                            <CardActions>
                                <Button variant="contained" color='primary' className={classes.cardText}>Application Development</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    );
}

Services.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);