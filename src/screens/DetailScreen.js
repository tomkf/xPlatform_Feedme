import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

import yelp from '../api/yelp';

const DetailScreen = ({ route }) => {
    const [businesses, setBusinesses] = useState([]);
    const { id } = route.params

    const searchAPI = async () => {
        const response = await yelp.get(`/${id}`);
        setBusinesses(response.data);
      }
  
      useEffect(() => {
          searchAPI();
        }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{ businesses.name } </Text>
       <Image source={{uri: businesses.image_url}} style={styles.image} /> 
       <Text style={businesses.heading}>Price: {businesses.price}</Text>
       <Text style={businesses.heading}>Rating: {businesses.rating}</Text>
       <Text style={businesses.heading}>Contact: {businesses.display_phone}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center'
    },
  
    heading: {
      fontWeight: 'bold',
      paddingTop: 10,
      paddingLeft: 10
    },
    image: {
      height: 250
    },
    stepItem: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20
    }
  });

export default DetailScreen;