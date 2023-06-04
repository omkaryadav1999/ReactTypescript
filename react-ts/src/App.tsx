import React,{ useReducer,createContext } from "react"
import Reducer from "./component/Reducers"
import { initialState } from "./component/Reducers"
import { Maction } from "./component/Reducers"
import Child from "./component/Child"
import LoginFomrs from "./component/LoginFomrs"



interface StateReducer{
  state:typeof initialState;
  dispatch:React.Dispatch<Maction>
}

export const userData = createContext({} as StateReducer)

function App(){
const [state,dispatch]=useReducer(Reducer,initialState)
  return(
    <>
      <userData.Provider value={{state,dispatch}}>
         <Child/>
      </userData.Provider>
      <LoginFomrs/>
    </>
  )
}

export default App