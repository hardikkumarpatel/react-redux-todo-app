import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import styles from './buttonWrapper.styles';

const useStyles = makeStyles(styles);
const ButtonWrapper = (props) => {
  const classes = useStyles();
  return (
    <Button {...props} className={classNames(classes.BUTTON)}>
      Add Todo
    </Button>
  );
};

export default ButtonWrapper;
