import './styles.css'
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import OrdersLocation from './OrdersLocation';

function Orders(){

  const [products,setProduct] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  console.log(products)
  useEffect(()=>{
    fetchProducts().then(response => setProduct(response.data))
    .catch(error => console.log(error));
  },[]);


  return(
    <div className="orders-container">
      <StepsHeader/>
      <ProductsList products={products}/>
      <OrdersLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
  )
}

export default Orders;