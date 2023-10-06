
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom';
// import  Home  from './Home';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
import {ProductList} from './ProductList';
import {AddProduct} from './AddProduct';
import {EditProduct} from './EditProduct';
import {Login} from './Login';
import {Signup} from './Signup';
import Header from './Header';

export default function App(){
  // const navigate=useNavigate()
  return(
    <div>
  

                <Routes>
                      <Route  path="/"                  element={<Login/>} />
                      <Route  path="/signup"                  element={<Signup/>} />
                      {/* <Route  path="/home"                  element={<Home/>} /> */}
                      {/* <Route  path="/productlist"        element=<{[<Header/>,<ProductList/>]}/> */}
                       <Route path="/productlist" element={[<Header />,<ProductList/>]} />
                      <Route  path="/add"           element={[<Header />,<AddProduct/>]} />
                      <Route  path="/editproduct/:id"           element={[<Header />,<EditProduct />]} />
                      
                  </Routes>
    </div>
  );
}



