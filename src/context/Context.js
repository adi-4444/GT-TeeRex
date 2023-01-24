import { useContext, createContext, useReducer } from "react";
import { cartReducer, filterReducer } from "./Reducer";

const Context = createContext()

const initialState = {
   cart: [],
   filters: { colors: '', gender: '', price: '', type: '' }
}

const ContextProvider = ({ children }) => {
   const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
   const [cartState, cartDispatch] = useReducer(cartReducer, initialState)
   return (
      <Context.Provider value={{ filterState, filterDispatch, cartState, cartDispatch }} >
         {children}
      </Context.Provider>
   )
}
export { ContextProvider }

export const ContextStates = () => {
   return useContext(Context)
}