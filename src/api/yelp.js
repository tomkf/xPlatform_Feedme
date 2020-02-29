import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer --m5yrF6n3Y_HTuqCn7m4aeSJlT5K0eyksXOElkbiwALy09CnnhIjrO1cf0MQmNktoQvF_Hg21IODRTHlbo7Ya_B0GNEvyUqnHMXx40SZE0JarjpFzSOu-j7AZVZXnYx'
  }
})