import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [
  {
    id: 1,
    name: 'Denmark B. Lobo',
    img: 'https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/226006826_2878421412472300_515879067037433056_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8A4KZ_oFj4CDzQrGdw8ljgmR83usMcNqCZHze6wxw2vu2mH5No5Ro5nJNI0s_nnNiyPcJWD7fxZ6UMtUa3a2w&_nc_ohc=PRAU0ZNQMYYQ7kNvgEPGgJf&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&cb_e2o_trans=q&oh=00_AYDNoAXMpmHtQImFzS5pOJ67dsu5mJ8R0kKdFT0iA2igLA&oe=664E1BCA',
  },
  {
    id: 2,
    name: 'Zyra Mae Reyes',
    img: 'https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-1/400486971_2828624823935670_4141414305936396210_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpLrdzH4TPRUk44D6A4bqfNvjbp-9Dm502-Nun70Obne2n1stlQcply7Ee3hRv9X-H1SLN0S1jiCgOIYAhXHu1&_nc_ohc=1VCy08Ik6iAQ7kNvgHCsF92&_nc_ht=scontent.fmnl33-3.fna&cb_e2o_trans=q&oh=00_AYCvsV9O_5d8r41_qUTLNDHcHe5kXpF9WmZFirPc4wSdUw&oe=664E1CAF',
  },
  {
    id: 3,
    name: 'Sean Andrei Datu',
    img: '',
  },
  {
    id: 4,
    name: 'Jezareel Trulen',
    img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/438293720_453856077050503_6435613948102752130_n.jpg?stp=dst-jpg_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFzcQYVuwgLIkgKltqrnZ15Z83dxifSNi5nzd3GJ9I2LhFnFxeHNBEKdcZ9Rv4d1mvoIKTzHU1__GHn868XqJkg&_nc_ohc=xEgvQZDnopAQ7kNvgH3k93s&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&cb_e2o_trans=q&oh=03_Q7cD1QE9KC_ouMeQy8RlleDZSliQ0_EPtTbWh9Fuk8qleoE3OQ&oe=666FD66E',
  },
  {
    id: 5,
    name: 'Allyssa Jan Laquio',
    img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/441544819_435722109165854_7778557204555883345_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG01mqJfpDCcpGBQUbGN_j6hbGkianWbsOFsaSJqdZuw-pPTV2Gr9i3D2sIPhkNGaw7m7Jhq7XxCz1Z0rQjyjuC&_nc_ohc=qXmUw35eT0AQ7kNvgHyB5Jg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&cb_e2o_trans=q&oh=03_Q7cD1QG4iBRPi-M-duQcLTw9mUOzxFeeFsHuGX1Tye63F1TH2Q&oe=666FB284',
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(products.slice(0, 3));

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.img }} style={styles.cartImage} />
      <View style={styles.cartInfo}>
        <Text style={styles.cartProductName}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logonav}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      </View>

      <View style={styles.navigation}>
        <Text style={styles.carttext}>ReservEase</Text>
        <Text style={styles.carttexts}></Text>
      </View>

      <View style={styles.navigation2}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
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
    padding: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  carttext: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#33cc33',
    textAlign: 'center',
  },
  carttexts: {
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center', // Add this line to center the text horizontally
},
  navigation2: {
    padding: 10,
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cartImage: {
    width: 85,
    height: 85,
    marginRight: 10,
    borderRadius: 5,
  },
  cartInfo: {
    flex: 1,
  },
  cartProductName: {
    fontSize: 14,
    color: 'grey',
  },
});

export default CartScreen;
