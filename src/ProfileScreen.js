import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper'; 

const profile = [
  { id: 1, name: 'Denmark Gil Espiritu', 
  imgUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png', },
];

const CartScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.logonav}>
      <Image source={require('../assets/logo.png')} style={styles.logo} /> 
        {/* Replace with your logo */}
      </View>

      <FlatList style={styles.productlist}
        data={profile}
        renderItem={({ item }) => (
        <View style={styles.productItem}>

          <View style={styles.navigation}>
            <Text style={styles.carttext}> User Profile </Text>
          </View>

          <Image style={styles.productImagePlaceholder} source={{ uri: item.imgUrl }}/>
          <Text style={styles.productName}>{item.name}</Text>
          
          <View style={styles.profiledetail}>
            <Text style={styles.profilecell}>Email: </Text>
            <Text style={styles.profilecell2}>denmarkespi@gmail.com</Text>
          </View>

          <View style={styles.profiledetail}>
            <Text style={styles.profilecell}>Other Infos</Text>
            <Text style={styles.profilecell2}>.....</Text>
          </View>


          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjust for number of columns per row
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8ecf4',
    marginBottom: 85,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  logonav: {
    marginTop: 10,
    marginLeft: 10,
  },
  navigation: {
    alignItems: 'center',
    marginBottom: 35,
  },
  carttext: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#33cc33',
  },
  productItem: {
    width: '97.5%',
    padding: 35,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  productImagePlaceholder: {
    width: 250,
    height: 250,
    backgroundColor: '#ccc',
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#33cc33',
    borderWidth: 1
  },
  productName: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 25,
  },
    productlist: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  filterButton: {
    paddingTop: 5,
    paddingHorizontal: 10,
    marginTop: 50,
    marginHorizontal: 140,
    height: 35,
    backgroundColor: '#33cc33',
    borderRadius: 20,
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 16,
    color: 'white',
  },
  profiledetail: {
    padding: 7,
    flex: 1,
    flexDirection: 'row',
  },
  profilecell: {
    flex: 1,
    flexWrap: 'no-wrap',
    fontWeight: 'regular',
    color: 'grey',
  },
    profilecell2: {
    fontWeight: 'bold',
    color: '#33cc33',
  }
});

export default CartScreen;
