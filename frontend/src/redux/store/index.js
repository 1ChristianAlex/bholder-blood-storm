import { createStore } from 'redux';
import { User_Reducer } from '../reducer/user';

const store = createStore(User_Reducer);

export default store;
