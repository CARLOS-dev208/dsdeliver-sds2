import { toast } from 'react-toastify';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrdersLocation from './OrdersLocation';
import OrderSummary from './OrderSummary';
import { checkIsSelected } from './helpers';
import { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import Footer from '../Footer';
import './styles.css'

function Orders(){

  const [products,setProducts] = useState<Product[]>([]);
  const [selectedProducts,setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice =selectedProducts.reduce((sum,item)=>{
      return sum + item.price;
  },0);
  
  useEffect(()=>{
    fetchProducts().then(response => setProducts(response.data))
    .catch(error =>  toast.warning('Erro ao listar produtos'));
  },[]);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((res) => {
      toast.error(`Pedido enviado com sucesso! Nº ${res.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }


  return(
    <>
    <div className="orders-container">
      <StepsHeader/>
      <ProductsList 
       onSelectProduct={handleSelectProduct}
       products={products}
       selectedProducts={selectedProducts}/>
      <OrdersLocation onChangeLocation={location => setOrderLocation(location)}/>
      <OrderSummary 
      amount={selectedProducts.length} 
      totalPrice={totalPrice}
      onSubmit={handleSubmit}/>
    </div>
    <Footer/>
    </>
  )
}

export default Orders;