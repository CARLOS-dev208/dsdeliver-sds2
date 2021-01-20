import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


export default function Orders() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = ()=>{
    setIsLoading(true);
    fetchOrders()
    .then(response => {
      setOrders(response.data)
    })
    .catch(() => Alert.alert('Erro', 'Houve um erro ao buscar os pedidos!'))
    .finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
  }
  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused])
  
  const handleOnPress = (order:Order) => {
    navigation.navigate('OrderDetails',{order});
  }
  return (
    <>
      <Header />
      <ScrollView style={styles.container} >
        {isLoading ? (
          <Text style={styles.textLoading}>Buscando Pedidos...</Text>
        ) :
          (
            orders.map(order => (
              <TouchableWithoutFeedback key={order.id} onPress={()=>{
                handleOnPress(order)
              }}>
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            ))
          )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  textLoading: {
    margin: 10,
    height: 700,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#d64a4a',
    fontFamily: 'OpenSans_700Bold'


  }
});
