
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from 'react';
import { API } from './global';
import "./AddProduct.css";
export function EditProduct() {
  
  const { id } = useParams();
  //const data = obj[id];
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`${API}/product/${id}`)
      .then((data) => data.json())
      .then((mvs) => setProduct(mvs));
  }, [id]);
  console.log(product);
  return(
  
      product ? <EditproductForm product={product}/> : <h1>loadiing...</h1>
   
  );
}
function EditproductForm({product}){
  
  const formValidationSchema=yup.object({
    name: yup.string().required(),
    rate: yup.number().required(),
    poster:yup.string().required().min(4).url(),
    rating: yup.number().required().min(0).max(10),
    summary:yup.string().required().min(40),
   
    
   },)
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({

    initialValues:{
        name: product.name,  
        rate: product.rate, 
        poster:product.poster, 
        rating:product.rating,
        summary:product.summary,
        
        
    },

    validationSchema : formValidationSchema,

    onSubmit:(newproduct)=>{
    console.log("form value",newproduct);
    ubdateproduct(newproduct);
    }
  });
  

  const navigate=useNavigate();
  const ubdateproduct=async (newproduct)=>{
    
    
      fetch(`${API}/product/${product._id}`,{
        method:"PUT",
        body:JSON.stringify(newproduct),
        headers:{"Content-Type": "application/json",},
        
      });
      navigate("/productlist")
       };

      
  return (
    <form onSubmit={handleSubmit} className="input">
      <TextField  error={touched.name && errors.name} name ="name"    onChange={handleChange} onBlur={handleBlur} value={values.name} label="name"       helperText={touched.name && errors.name? errors.name : null} variant="outlined" />
      <TextField error={touched.rate && errors.rate} name ="rate" onChange={handleChange} onBlur={handleBlur} value={values.rate} label="rate"   helperText={touched.rate && errors.rate? errors.rate : null} variant="outlined" />
      <TextField  error={touched.poster && errors.poster} name ="poster"  onChange={handleChange} onBlur={handleBlur} value={values.poster} label="poster url"  helperText={touched.poster && errors.poster? errors.poster : null} variant="outlined" />
      <TextField error={touched.rating && errors.rating} name ="rating"  onChange={handleChange} onBlur={handleBlur} value={values.rating} label="rating"     helperText={touched.rating && errors.rating? errors.rating : null} variant="outlined" />
      <TextField error={touched.summary && errors.summary} name ="summary" onChange={handleChange} onBlur={handleBlur} value={values.summary} label="summary"     helperText={touched.summary && errors.summary? errors.summary : null} variant="outlined" />
     
      <Button type="submit" variant="contained" color="success">Save</Button>
    </form>

  );
}

