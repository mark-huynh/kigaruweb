
const initState = {
    items: []

}
const cartReducer= (state = initState,action)=>{
    if(action.type === 'ADD_TO_CART')
    {
          return Object.assign({}, state, {items: state.items.concat(action.payload)});
    }
    else if(action.type ==='REMOVE_FROM_CART')
    {
        return Object.assign({},{items: state.items.filter(item => item.name !== action.payload.name)});
    }
  else{
      return state
  }
}
export default cartReducer;