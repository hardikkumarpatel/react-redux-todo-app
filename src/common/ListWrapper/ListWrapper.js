import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import Styles from './ListWrapper.styles';

const useStyles = makeStyles(Styles);
const ListWrapper = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classNames(classes.LISTBUTTON)} {...props} color="primary" variant="contained" disabled style={{ background: '#E21717', color: 'white'}}>
        {props.children}
      </Button>
      <br />
    </div>
  );
};

export default ListWrapper;
