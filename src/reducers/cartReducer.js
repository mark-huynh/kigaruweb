
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
        // const idx = state.items.indexOf(action.payload);
        // return [...state.items.slice(0, idx), ...state.items.slice(idx + 1)]
        console.log(state.items);
        console.log(state.items.filter(item => item != action.payload));
        return Object.assign({},{items: state.items.filter(item => item != action.payload)});
    }
  else{
      return state
  }
}
export default cartReducer;