import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [
  { id: 1, name: 'Property 1',
  imgUrl: 'https://th.bing.com/th?id=OIP.mzDw4q-bJvJ5PC_ZXCMbFwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 2, name: 'Property 2',
  imgUrl: 'https://th.bing.com/th?id=OIP.zi93gXQqVkzWPIhYRzFmawHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 3, name: 'Property 3',
  imgUrl: 'https://th.bing.com/th?id=OIP.sSfBZPQbA_GXFpffnoEGnAHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 4, name: 'Property 4', 
    imgUrl: 'https://th.bing.com/th?id=OIP.cP5z4DEuKIX_ya8TrKD_UwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 5, name: 'Property 5',
    imgUrl: 'https://th.bing.com/th/id/OIP.mj3dEOUGwwU5l-X7dRLE4QHaEo?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 6, name: 'Property 6',
    imgUrl: 'https://th.bing.com/th?id=OIP.sSfBZPQbA_GXFpffnoEGnAHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 7, name: 'Property 7',
    imgUrl: 'https://th.bing.com/th/id/OIP.UCDfdrpG4OS6qL5MhQUKPAHaEo?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 8, name: 'Property 8', 
    imgUrl: 'https://th.bing.com/th/id/OIP.oFLRA1j3iTTqckOV2C-6JgHaEn?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logonav}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        
      </View>
      
      <View style={styles.navigation}>
        <TextInput
          placeholder="Search for Property"
          placeholderTextColor="black"
          style={styles.searchInput}/>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigation2}>
        <Text style={styles.navtext}> RECOMMENDED </Text>
      </View>
      <FlatList style={styles.productlist}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image
              style={styles.productImagePlaceholder} source={{ uri: item.imgUrl }}/>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Book Now!{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Adjust for number of columns per row
        contentContainerStyle={styles.productListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  logonav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  cart: {
    marginRight: 10,
  },
  cartIcon: {
    marginRight: 10,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  navigation2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    backgroundColor: 'none',
  },
  navtext: {
    color: '#EE914D',
    fontWeight: 'bold',
  },
  navtext2: {
    color: 'grey',
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    height: 35,
    backgroundColor: '#EE914D',
    borderColor: '#EE914D',
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 16,
    color: 'white',
  },
  productItem: {
    width: '47.5%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  productImagePlaceholder: {
    width: 180,
    height: 180,
    backgroundColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#EE914D',
  },
  productName: {
    color: 'grey',
    textAlign: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#EE914D',
  },
  productlist: {
    paddingVertical: 5,
  },
});

export default HomeScreen;
