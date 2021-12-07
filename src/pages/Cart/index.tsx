import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Keyboard, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import api from '../../services/api'

export default function Cart() {
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
    <View style={styles.items}>
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
        <TouchableOpacity style={styles.removeButton} onPress={() => navigation.navigate('Home')}>
          <Feather 
            name='x-circle'
            size={30}
            color="#ff0000"
          />
          <Text style={{ color: "#ff0000" }}>Remove</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Feather 
            name='chevron-left'
            size={20}
            color="#fff"
          />
          <Text style={styles.welcomeText}>Voltar</Text>
        </TouchableOpacity>
        <Feather 
            name="shopping-cart"
            size={23}
            color="#fff"
          />
        <Text style={styles.welcomeText}>Total $ 5479</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
      />
    </SafeAreaView>
  )
}
