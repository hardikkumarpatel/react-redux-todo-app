import RootReducer from '../reducer/rootReducer';
import { createStore } from 'redux';

const RootStore = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default RootStore;
