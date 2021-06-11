import React, { useState } from 'react';
import Styles from './index.styles';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Grid, Paper } from '@material-ui/core';
import Input from '../../common/InputWrapper/inputWrapper';
import Card from '../../common/CardWrapper/cardWrapper';
import Button from '../../common/ButtonWrapper/buttonWrapper';
import List from '../../common/ListWrapper/ListWrapper';
import Delete from '../../common/DeleteWrapper/DeleteWrapper';
import { addTodo, deleteTodo } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(Styles);
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.list);
  const [input, setInput] = useState('');

  const onClickAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  const onDeleteTodo = (id) => {
      dispatch(deleteTodo(id))
  };

  return (
    <div className={classNames(classes.root)}>
      <Paper className={classNames(classes.paper)}>
        <Grid container>
          <Grid
            item
            xs={2}
            md={3}
            className={classNames(classes.gridRoot)}></Grid>
          <Grid item xs={2} md={6} className={classNames(classes.gridRoot)}>
            <h3 style={{ color: 'white' }}>Add your todo here! ✌🏻</h3>
            <h3 style={{ color: 'white' }}>Made in Redux with love ❤️ React.</h3>
            <Card>
              <Grid container>
                <Grid item xs={6}>
                  <Input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    id='addTodo'
                    variant='contained'
                    color='secondary'
                    onClick={onClickAddTodo}
                  />
                </Grid>
              </Grid>
            </Card>
            <div style={{ marginTop: '1%' }}>
              <Card isList={true}>
                {todoList.sort((a, b) => a - b).reverse().map((ele) => {
                  return (
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '81%' }}>
                        <List key={ele.id}>{ele.data}</List>
                      </div>
                      <div style={{ width: '20%', marginLeft: '5%' }}>
                         <Delete onClick={() => onDeleteTodo(ele.id)}/>
                      </div>
                    </div>
                  );
                })}
              </Card>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            md={3}
            className={classNames(classes.gridRoot)}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
