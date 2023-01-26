import { ADD_TO_CART, DECREASE_QTY, INCREASE_QTY, REMOVE_FROM_CART } from '../common/constants/cartConstants'
import { COLOUR, GENDER, PRICE, TYPE } from "../common/constants/filterConstants"

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

export const filterReducer = (state, action) => {
   switch (action.type) {
      case COLOUR:
         let { colour, check } = action.payload;
         return {
            ...state,
            filters: {
               ...state.filters,
               colours: check ? [...state.filters.colours, colour] :
                  state.filters.colours.length > 0 ? state.filters.colours.filter(c => c !== colour) :
                     []
            }
         }
      case GENDER:
         let { gender } = action.payload;
         return {
            ...state,
            filters: {
               ...state.filters,
               gender: action.payload.check ? [...state.filters.gender, gender] :
                  state.filters.gender.length > 0 ? state.filters.gender.filter(g => g !== gender) :
                     []
            }
         }
      case PRICE:
         let { price } = action.payload;
         return {
            ...state,
            filters: {
               ...state.filters,
               price: action.payload.check ? [...state.filters.price, price] :
                  state.filters.price.length > 0 ? state.filters.price.filter(p => p !== price) :
                     []
            }
         }
      case TYPE:
         let { type } = action.payload;
         return {
            ...state,
            filters: {
               ...state.filters,
               type: action.payload.check ? [...state.filters.type, type] :
                  state.filters.type.length > 0 ? state.filters.type.filter(t => t !== type) :
                     []
            }
         }

      default:
         return state;
   }
}
