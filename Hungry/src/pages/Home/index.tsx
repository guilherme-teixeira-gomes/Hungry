import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem-vindo ao I'm Hungry</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="O que você quer comer?"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {['Pizza', 'Burgers', 'Sushi', 'Doces', 'Saladas'].map((category, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ScrollView style={styles.itemsContainer}>
        {[
          { name: 'Pizza Margherita', price: 'R$25,00', image: 'https://via.placeholder.com/150' },
          { name: 'Hambúrguer Clássico', price: 'R$20,00', image: 'https://via.placeholder.com/150' },
         
        ].map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    padding: 20,
    backgroundColor: '#fe6600',
    borderRadius: 8,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchContainer: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  category: {
    backgroundColor: '#fe6600',
    height:35,
    paddingHorizontal: 15,
    borderRadius: 20,
    justifyContent:"center",
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    textAlign:"center",
    fontSize: 14,
  },
  itemsContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1, // Adiciona sombra em Android
    shadowColor: '#000', // Adiciona sombra em iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#fe6600',
  },
});

export default Home;
