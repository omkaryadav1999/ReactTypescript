  import React,{useState} from "react";
import { ILogin } from "./LoginSchema";

  interface IUser{
    user:ILogin
  }
  
  const LoginFomrs = ()=>{
  const [data,setData] = useState<IUser>({
    user:{
        email:"",
        password:""
    }
  })

  const handleData = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    setData({
        user:{
            ...data.user,
            [e.target.name]:e.target.value
        }
       
    })
}

 const SubmitData = (e:React.FormEvent<HTMLFormElement>):void=>{
  e.preventDefault()
  console.log(data.user)
 }

    return(
        <>
           <h1>login</h1>
           <form onSubmit={SubmitData}>
           <input type="email" value={data.user.email} name="email" onChange={handleData}/>
           <input type="password" value={data.user.password} name="password" onChange={handleData}/>
            <input type="submit"/>
           </form>
        </>
    )
  }

  export default LoginFomrs