import { combineReducers } from 'redux'
import Campuses from './Campuses';
import Students from './Students'

// const initialState = {
//   campuses: [],
//   students: []
// }

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({ Campuses, Students });

export * from './Campuses';
export * from './Students';
