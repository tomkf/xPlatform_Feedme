import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PriceResultList = ({storeName}) => {
  return (
    <View>
        <Text style={styles.heading}> {storeName.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
heading : {
    fontSize: 16,
    fontWeight: 'bold'
}
});

export default PriceResultList;