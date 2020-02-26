import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PriceResultList = ({company}) => {
  return (
    <View>
        <Text style={styles.heading}> {company} </Text>
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