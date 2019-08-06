export const addToCart= (name)=>{
    return{
        type: 'ADD_TO_CART',
         payload: name }
    }
export const removeFromCart= (name)=>{
    return{
        type: 'REMOVE_FROM_CART',
         payload: name }
    }