import axios from "axios"


// const API_URL = 'http://192.168.0.108:8080'
const BASE_URL = 'https://app-pedido-pizza.herokuapp.com'

export function fetchOrders(){
  return axios(`${BASE_URL}/orders`)
}

export function ConfirmDelivery(id: number){
  return axios.put(`${BASE_URL}/orders/${id}/delivered`)
}