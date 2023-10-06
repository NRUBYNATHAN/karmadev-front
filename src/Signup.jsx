

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from './global';
import * as yup from "yup";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

export function Signup() {
  const navigate=useNavigate();
  const[show,setShow]=useState("success")
  const formValidationSchema=yup.object({

    name:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required(),
  }

  )
  const {handleChange,handleSubmit,values,handleBlur,touched,errors}=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    validationSchema:formValidationSchema,
    onSubmit:(value)=>{
console.log(value)
addsignup(value)
    }
  })

  const addsignup=async (value)=>{
    const data= await fetch(`${API}/signup`,{
      method:"POST",
      headers: {"Content-type": "application/json",},
      body:JSON.stringify(value)
  })
console.log(data.message)
  if(data.status==400){
    console.log("error")
    setShow("error")
    alert("user already exists")

  
  }else{
    setShow("success");
    navigate("/productlist")


}}


  return (
    <div className='login'>
      <div className='login_inner'>
      {show==="success"?null:<div className='sign1'><p className='sign'>user alrady exists</p></div>}
      <form className='login_form' onSubmit={handleSubmit}>
       <h1>signup</h1>
        <TextField  onBlur ={handleBlur} error={touched.name && errors.name} helperText={touched.name && errors.name ?errors.name :null} value={values.name} name="name" onChange={handleChange} label="name" variant="outlined"/>
      <TextField  onBlur={handleBlur} error={touched.email && errors.email} helperText={touched.email && errors.email ?errors.email :null} value={values.email} name="email" onChange={handleChange} label="email" />
      <TextField  onBlur={handleBlur} error={touched.password && errors.password} helperText={touched.password && errors.password ?errors.password :null} value={values.password} name="password" onChange={handleChange} type="password"  label="password"/>
   
      <Button  type="submit"  color={show} variant='contained'>{show==="success"?"submit":"retry"}</Button>
       </form>
       
       <div className='login_bot'>
      <p className='login_text'>Already Have An Account ?<Link to={"/"}>Login</Link></p>
    </div>
       </div>
    </div>
  );
}
