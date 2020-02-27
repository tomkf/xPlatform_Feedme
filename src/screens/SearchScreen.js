import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import PriceResultList from '../components/PriceResultList';



const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [businesses, setBusinesses] = useState([]);

    const filterByPrice = (price) => {
        return businesses.filter( business => {
            return business.price === price
        });
    }
  
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

      console.log(businesses);

    return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()} />

        <div> 
            <PriceResultList company={this.state.businesses} results={filterByPrice('$')} title='Budget Eats'/>
            <PriceResultList company={this.state.businesses} results={filterByPrice('$$')} title='Average'/>
            <PriceResultList company={this.state.businesses} results={filterByPrice('$$$')} title="Gettin' Pricey"/>
            <PriceResultList company={this.state.businesses} results={filterByPrice('$$$$')} title='Once in a Blue Moon'/> 
        </div>

      <FlatList
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
       />
    </View>
  );
  }
  
  const styles = StyleSheet.create({});
  
  export default SearchScreen;