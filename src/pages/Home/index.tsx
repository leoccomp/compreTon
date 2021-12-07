import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import {
  Card,
  Button
} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();
  
  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await api.get('/products');
      
      setProducts(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return(
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: 'italic' }}>Carregando dados...</Text>
      </View>
    );
  }
  
  const renderItem = ({ item }) => (
    <Card containerStyle={{ padding: 0, width: '42%', borderRadius: 8, backgroundColor: '#fff' }} key={item.id}>
        <Image
          style={styles.image}
          resizeMode={"center"}
          source={{ uri: item.image }}
        />
      <View style={styles.details}>
        <View style={styles.labels}>
          <Text style={styles.name}>{item.name.toUpperCase()}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <View>
          <Button raised title="Add to cart" />
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.welcome}>
        <View>
          <Text style={styles.welcomeText}>Olá, bem vindo!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Feather 
            name="shopping-cart"
            size={23}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#fff',
    marginTop: 10
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#008000',
  },
  details: {
    padding: 10,
  },
  labels: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5,
    minHeight: 70,
  },
  price: {
    color: '#008000',
    textAlign: "right",
    fontSize: 14,
    fontWeight: '900'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: '5%',
  },
  cardStyle: {
    margin: 0,
  },
  name: {
    textAlign: "left",
    fontWeight: '900',
    minHeight: 40,
    fontSize: 14
  },
  welcome: {
    flexDirection: 'row',
    minHeight: 60,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#008000',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#fff',
  },
});