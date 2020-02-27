import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PriceResult from './PriceResult'

const PriceResultList = ({company}) => {
  return (
    <View>
        {/* <Text style={styles.heading}> {company} </Text> */}
        <PriceResult result={ company } />
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