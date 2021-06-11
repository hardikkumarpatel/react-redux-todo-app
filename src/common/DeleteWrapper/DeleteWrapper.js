import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const DeleteWrapper = (props) => {
  return (
      <IconButton aria-label='edit' {...props} style={{ marginTop: '10%', background: '#E21717'}}>
        <DeleteIcon style={{ color: 'white' }}/>
      </IconButton>
  );
};

export default DeleteWrapper;
