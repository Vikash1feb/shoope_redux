import React, { useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from './redux/actions/ProductAction';

function Home() {
  // const [products,setProduct]=useState([]);
   const dispatch =useDispatch();
   const  products =  useSelector((state)=>state.products.Listproducts);
  const callApi= async()=>{
    const response =await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    console.log(data);
    // setProduct(data);
     dispatch(setProducts(data));
  }
  useEffect(()=>{
    callApi();
 },[])
  return (
    <div className='row'>
    {
      products && products.map((item, index) => (
        <div className='col-3' key={item.id}>
          <div className="card" >
            <img src={item.image} className="card-img-top product-image-list" alt="..." />
            <div className="card-body">
              <h5 className="card-title product-title-list">{item.title}</h5>
              <p className="card-text product-description-list">{item.description}</p>
              <h5 className="card-title">{item.price}</h5>
              <Link to={`/product/${item.id}`} className="btn btn-primary button-buy-now">Buy Now</Link>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default Home;