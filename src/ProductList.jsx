


import { useState } from "react";
import { useEffect } from "react";
import  { Product }  from "./Product";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import "./Product.css";

export function ProductList () {
  //movie list fetch in API
  const [obj, setObject] = useState([]);

const getMovies=()=>{
  fetch(`${API}/products`)
      .then((data) => data.json())
      .then((mvs) => setObject(mvs));
}


  useEffect(() => getMovies(), []);
console.log(obj)
  const deleteMovie = async(id)=>{

  await fetch(`${API}/product/${id}`,{
      method:"DELETE",
    });
    getMovies();
  }
  const navigate=useNavigate()
  return (
    //ithula index and key value ethukuna map panrapo error kattama iruka
  

   
    <div>
      {/* <AddMovie obj={obj} setObject={setObject} /> */}
      <div className="productlist">
        {obj.map((mv) => 
        (<Product key={mv.id} 
        data={mv} 
        id={mv._id} 
        EditButton={  
          <IconButton  color="secondary" onClick={()=>navigate(`/editproduct/${mv._id}`)} aria-label="edit product">
           <EditIcon />
          </IconButton>}
          DeletteButton={  
            <IconButton  color="error" onClick={()=>deleteMovie(mv._id)} aria-label="delete">
            <DeleteIcon />
            </IconButton>}
        // DeletteButton={  
        // <IconButton  color="error" onClick={()=>deleteMovie(mv._id)} aria-label="delete">
        // <DeleteIcon />
        // </IconButton>}
        //  EditButton={  
        //   <IconButton  color="secondary" onClick={()=>navigate(`/movie-list/edit/${mv._id}`)} aria-label="edit movie">
        //   <EditIcon />
        //   </IconButton>}
        />))}
      </div>
    </div>
   
  );
}
