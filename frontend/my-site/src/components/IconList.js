import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';


const styles = themeRedGeese => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: '5%',
    width: '100%'
  },
  icon: {
    margin: themeRedGeese.spacing.unit * 2,
  },
  iconFb: {
    color: "#475993",
    margin: themeRedGeese.spacing.unit * 2,
  },
  iconTw: {
    color: "#1da1f2",
    margin: themeRedGeese.spacing.unit * 2,
  },
  iconLi:{
    color: "#0077b5",
    margin: themeRedGeese.spacing.unit *2,
  },
  iconQ:{
    color: "#a82400",
    margin: themeRedGeese.spacing.unit *2,
  },
  iconPP:{
    color: "#003087",
    margin: themeRedGeese.spacing.unit *2,
  },
  iconHover: {
    margin: themeRedGeese.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class FontAwesome extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton>
          <Icon className={classNames(classes.iconFb, 'fab fa-facebook-square')} />
        </IconButton>
        <IconButton>
          <Icon className={classNames(classes.iconTw, 'fab fa-twitter-square')} />
        </IconButton>
        <IconButton>
          <Icon className={classNames(classes.iconLi, 'fab fa-linkedin')} />
        </IconButton>
        <IconButton>
          <Icon className={classNames(classes.iconQ, 'fab fa-quora')} />
        </IconButton>
        <IconButton>
          <Icon className={classNames(classes.iconPP, 'fab fa-paypal')} />
        </IconButton>
      </div>
    );
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FontAwesome);
