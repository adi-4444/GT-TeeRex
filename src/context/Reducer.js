import { ADD_TO_CART, DECREASE_QTY, INCREASE_QTY, REMOVE_FROM_CART } from '../common/constants/cartConstants'
export const filterReducer = (state, action) => {
   switch (action.type) {

      default:
         return state;
   }
}

export const cartReducer = (state, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
      case REMOVE_FROM_CART:
         return { ...state, cart: state.cart.filter(p => p.id !== action.payload.id) }
      case INCREASE_QTY:
         return {
            ...state, cart: state.cart.map(p => {
               if (p.id === action.payload.id) {
                  return { ...p, qty: p.qty + 1 };
               }
               return p;
            })
         };
      case DECREASE_QTY:
         return {
            ...state, cart: state.cart.map(p => {
               if (p.id === action.payload.id) {
                  return { ...p, qty: p.qty - 1 };
               }
               return p;
            })
         };
      default:
         return state;
   }
}