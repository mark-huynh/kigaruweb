// import {ADD_TO_CART} from './action/cartActions'

const initState = {
    items: []

}
const cartReducer= (state = initState,action)=>{
    if(action.type === 'ADD_TO_CART')
    {
          return Object.assign({}, state, {items: state.items.concat(action.payload)});
    }
  else{
      return state
  }
}
export default cartReducer;