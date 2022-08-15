import * as types from 'constants/types';
let initState = {
  list: [],
  listTotal: 0
};
export default function post(state = initState, action){
  switch(action.type){
    case types.GET_POST_LIST:
      if(action.payload){
        return {...state,list:action?.payload?.result,listTotal: action.payload.totalCount};
      }
      break;
    default:
      return state;
  }
}