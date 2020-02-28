import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import PriceResult from './PriceResult'

const PriceResultList = ({apiResult, navigation}) => {
  return (
    <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={apiResult}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          const showDetail = () => {
            navigation.navigate('StoreDetails')
          }

          return (
            <TouchableOpacity onPress={() => showDetail()}>
              <PriceResult result={ item } /> 
            </TouchableOpacity> 
          )
        }}  />
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