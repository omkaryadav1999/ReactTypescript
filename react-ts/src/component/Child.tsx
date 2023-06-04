import React,{useContext} from "react"
import { userData } from "../App"


function Child(){
    const {state,dispatch} = useContext(userData)
    return(
        <>
           <h1>name:{state.name}</h1>
           <button onClick={()=>dispatch({type:"Change_name",paylod:"rahul"})}>changeName</button>
           <h2>age:{state.age}</h2>
           <button onClick={()=>dispatch({type:"Change_age",paylod:25})}>changeName</button>
        </>
    )

}

export default Child
