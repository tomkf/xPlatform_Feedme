import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PriceResultList = () => {
  return (
    <View>
        <Text style={styles.heading}>Price Category</Text>
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