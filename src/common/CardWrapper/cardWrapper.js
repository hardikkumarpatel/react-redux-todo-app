import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from './cardWrapper.styles';
import classNames from 'classnames';

const useStyles = makeStyles(styles)
const CardWrapper = (props) => {
  const classes = useStyles();
  return(
    <Card className={classNames(props.isList ? classes.CARDTRUE : classes.CARDFALSE)}>
        <CardContent>
            {props.children}
        </CardContent>
    </Card>
  )
};

export default CardWrapper;
