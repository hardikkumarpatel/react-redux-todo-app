import { FormControl, makeStyles, TextField } from '@material-ui/core';
import Styles from './inputWrapper.styles';
import classNames from 'classnames';

const useStyles = makeStyles(Styles);
const Input = (props) => {
  const classses = useStyles();
  return (
    <FormControl className={classNames(classses.INPUT)}>
      <TextField {...props}></TextField>
    </FormControl>
  );
};

export default Input;
