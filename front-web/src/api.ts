import { OrderPayload } from './Orders/types';
import axios from "axios";

const http = axios;
const API_URL = 'http://localhost:8080';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
export function fetchProducts(){
  return http(`${API_URL}/products`)
}

export function fetchLocalMapBox(local:string){
  return http(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload){
  return http.post(`${API_URL}/orders`, payload)
}