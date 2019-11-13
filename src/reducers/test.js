// import {
//     FETCH_COMMENTS,
//     POST_COMMENT
// } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case 'test':
      {
        return [...state, ...action.payload]
      }
    default:
      return state;
  }
};
