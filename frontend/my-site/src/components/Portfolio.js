import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Typography, Divider, Paper } from '@material-ui/core';
import image from '../ui/portfolio/awp.png';
import tp from '../ui/portfolio/tp.jpeg';
import br from '../ui/portfolio/br.jpeg';
import mm from '../ui/portfolio/mm.jpeg';

const styles = themeRedGeese => ({
    root: {
        flexGrow: 1,
        height: '100%',
        backgroundColor: themeRedGeese.palette.primary.dark,
        paddingTop: themeRedGeese.spacing.unit * 4,
    },
    paperDark: {
        backgroundColor: themeRedGeese.palette.primary.dark,
        justifyContent: 'space-around',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        paddingTop: themeRedGeese.spacing.unit * 2,
        paddingBottom: themeRedGeese.spacing.unit * 5,
        textAlign: 'center',
    },
    gridList: {
        width: '75%',
        // height: 450,
        marginTop: themeRedGeese.spacing.unit * 2,
        padding: '10px 10px 10px 10px',
    },
    dividerSm: {
        marginRight: '30%',
        marginLeft: '30%',
        backgroundColor: 'white',
        // display: 'block'
    },
    titleBanner: {
        paddingTop: themeRedGeese.spacing.unit * 3,
        paddingBottom: themeRedGeese.spacing.unit * 2,
        color: 'white',
        margin: 'auto',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

const tileData = [
    {
        img: image,
        title: 'Image',
        author: 'author',
        cols: 3,
        url: 'www.amazingworkplaces.co.in/'
    },
    {
        img: br,
        title: 'Image',
        author: 'author',
        cols: 2,
        url: 'www.brandrecall.co.in/'
    },
    {
        img: tp,
        title: 'Seeall',
        author: 'author',
        cols: 1,
        url: 'www.1oneteam.com/'
    },
    {
        img: mm,
        title: 'Image',
        author: 'author',
        cols: 3,
        url: 'www.mindmatrix.com/'
    },
];

function ImageGridList(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Typography variant="h3" className={classes.titleBanner}>
                Portfolio
            </Typography>
            <Divider className={classes.dividerSm} variant="middle" elevation={4} />
            
            <Paper className={classes.paperDark} elevation={4} square={true}>
                <GridList cellHeight={200} className={classes.gridList} cols={3}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            {/* <a href={title.url}> */}
                                <img src={tile.img} alt={tile.title} />
                            {/* </a> */}
                        </GridListTile>
                    ))}
                </GridList>
                
            </Paper>
            
        </section>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
