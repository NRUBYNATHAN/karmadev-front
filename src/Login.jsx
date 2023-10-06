
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from './global';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Login.css";



export function Login() {
 

  const navigate=useNavigate();
  const[formstate,setFormstate]=useState("success")

const {handleChange,handleSubmit,values}=useFormik({
  initialValues:{
    
    email:"",
    password:""
  },
  
  onSubmit:(value)=>{
console.log(value)
addlogin(value)
  }
})

const addlogin=async (value)=>{
  const data= await fetch(`${API}/`,{
    method:"POST",
    headers: {"Content-type": "application/json",},
    body:JSON.stringify(value)
})
if(data.status==401){
  console.log("error")
  alert("invalid credentials")
  setFormstate("error")


}else{
  setFormstate("success")
// const result=await data.json()
// console.log(result)
// localStorage.setItem("token",result.token)

                   navigate("/productlist")

}}  

// const signin=e=>{

// dispatch({
//   type:"SET_USER",
//   user:values.email,
// })
// }


  return (
    <div className='login_body'>
    <div className='login'>
    
     
    <div className='login_inner'>
      {formstate==="success"?null:<div className='sign1'><p className='sign'>Invalid Credentials</p></div>}
      <form className='login_form' onSubmit={handleSubmit}>
        <h1>Login</h1>
       <TextField   value={values.email} name="email" onChange={handleChange} label="email" />
      <TextField   name="password" onChange={handleChange} type="password"  label="password"/>
      
      <Button  type="submit"  color={formstate} variant='contained'>{formstate==="success"?"submit":"retry"}</Button>
     
  
     
 
      </form>
      <div className='login_bot'>
      <p className='login_text'>Don't Have An Account ? <Link to={"/signup"}>Sign Up</Link></p>
    </div>
     
    </div>
  
      
    
    </div>
    </div>
  );
}