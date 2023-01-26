import { useContext, createContext, useReducer } from "react";
import { cartReducer, filterReducer } from "./Reducer";


const initialState = {
   cart: [],
   filters: { colours: [], gender: [], price: [], type: [] }
}

const Context = createContext(initialState)

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