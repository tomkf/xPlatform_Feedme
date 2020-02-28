import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import PriceResultList from '../components/PriceResultList';


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [businesses, setBusinesses] = useState([]);
  
    const searchAPI = async () => {
      const response = await yelp.get('/search', {
        params: {
          limit: 30,
          term: term,
          location: 'vancouver'
        }
      });
  
      setBusinesses(response.data.businesses);
      console.log(businesses);
    }

    useEffect(() => {
        searchAPI();
      }, [])

      const filterByPrice = (price) => {
        return businesses.filter( business => {
            return business.price === price
        });
    }

    return (
      <View style={{flex: 1}} >
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()} />
        
        <Text style={styles.heading}>Budget Eats</Text>
        <PriceResultList apiResult={filterByPrice('$')} />

        <Text style={styles.heading}>Average</Text>
         <PriceResultList apiResult={filterByPrice('$$')} />

         <Text style={styles.heading}>Getting Pricey"</Text>
          <PriceResultList apiResult={filterByPrice('$$$')} />

          <Text style={styles.heading}>Expensive</Text>
            <PriceResultList apiResult={filterByPrice('$$$$')}  />  
    </View>
  );
  }

  const styles = StyleSheet.create({
    heading : {
        fontSize: 16,
        fontWeight: 'bold'
    }
    });
    
  export default SearchScreen;