import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
  return (
    
      <div>
       <AppBar position="static">
        <Toolbar>

          {/* <Button onClick={()=>navigate("/home")} color="inherit">Home</Button> */}
          <Button onClick={()=>navigate("/Productlist")} color="inherit">Product</Button>
          <Button onClick={()=>navigate("/add")} color="inherit">Add Product</Button>
          <Button onClick={()=>navigate("/")} color="inherit">Logout</Button>
        
        
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
