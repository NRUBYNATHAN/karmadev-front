import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global';
import "./AddProduct.css";
export function AddProduct() {
  const formValidationSchema=yup.object({
   name: yup.string().required(),
   rate: yup.number().required(),
   poster:yup.string().required().min(4).url(),
   rating: yup.number().required().min(0).max(10),
   summary:yup.string().required().min(30),
   
   
  },)
   
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({

    initialValues:{
        name: "",
        rate: "",
        poster: "",
        rating: "",
        summary: "",
        
      
    },

    validationSchema : formValidationSchema,

    onSubmit:(newProduct)=>{
    console.log("form value",newProduct);
    addMovie(newProduct);
    }
  });
  
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setrating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rate, setrate] = useState("");
  const navigate=useNavigate();
  const addMovie=async (newProduct)=>{
    
      // const newProduct = {
      //   name: name,
      //   poster: poster,
      //   summary: summary,
      //   rating: rating,
      //   rate: rate,
      // };
      fetch(`${API}/add`,{
        method:"POST",
        body:JSON.stringify([newProduct]),
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
     
     
     

      {/*<input onChange={(event)=>setName(event.target.value)} type="text" placeholder="name"/>
            <input onChange={(event)=>setPoster(event.target.value)} type="text" placeholder="poster"/>
            <input onChange={(event)=>setSummary(event.target.value)} type="text" placeholder="summary"/>
            <input onChange={(event)=>setrating(event.target.value)} type="text" placeholder="rating"/> */}

      {/*meterial button introduce */}

      {/* <button onClick={()=>{
            const newProduct= {
              name:name,
              poster:poster,
              summary:summary,
              rating:rating,};
              setObject([...obj,newProduct]);
            }}>Add Movie</button> */}
      {/* meterial button  */}
      <Button type="submit" variant="contained">Add Product</Button>
    </form>
   
  );
}

