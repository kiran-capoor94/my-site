import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
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
          <Icon className={classNames(classes.icon, 'fab fa-facebook-square')} />
        </IconButton>
        <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="primary" />
        <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="secondary" />
        <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="action" />
        <Icon
          className={classNames(classes.iconHover, 'fa fa-plus-circle')}
          color="error"
          style={{ fontSize: 30 }}
        />
        <Icon
          className={classNames(classes.icon, 'fa fa-plus-circle')}
          color="disabled"
          fontSize="large"
        />
      </div>
    );
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FontAwesome);
