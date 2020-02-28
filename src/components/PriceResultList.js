import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PriceResult from './PriceResult'

const PriceResultList = ({apiResult}) => {
  return (
    <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={apiResult}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return <PriceResult result={ item } />
        }}   />
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