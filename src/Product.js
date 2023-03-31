import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Product() {
  const products = useSelector((state)=> state.products.Listproducts);
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

export default Product;