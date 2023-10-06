
import Card from '@mui/material/Card';
import "./Product.css";

export function Product({ data,id,EditButton,DeletteButton }) {
  //conditional styling
  const styling = {
    color: data.rating > 8.5 ? "green" : "red"
  };
 
  return (

  <Card className='product' >
    <h2 className="product_name">{data.name}</h2>
     <img className="product_poster" src={data.poster} alt={data.name} />
       <div className="product_data">
        <div className='product_two'>
           <h2>$<span className='rate'>{data.rate}</span></h2>
            <p style={styling}>⭐{data.rating}</p>
        </div>
       
          
           <p className="product_summary">{data.summary}</p> 
        </div>
        <div className="like">
        {EditButton} {DeletteButton} 
          </div>
    </Card>

  );
}
