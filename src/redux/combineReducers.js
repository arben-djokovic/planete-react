import {createStore, combineReducers} from 'redux';
import { home, page2, page3, page4 } from './reducers/homeReducer';

const rootReducer = combineReducers({
   home,
   page2,
   page3,
   page4
})
const store = createStore(rootReducer)
export default store
