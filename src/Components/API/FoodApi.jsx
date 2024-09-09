import axios from 'axios'
import { useContext } from 'react';

export const apiClient = axios.create(
  {
    baseURL:'http://localhost:8081'
  }
);

apiClient.interceptors.request.use(
    (config) => {
      
        const token = localStorage.getItem('authToken') || '';

        if (token) {
            config.headers.Authorization =token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const retrieveFoodApi=()=> apiClient.get('/food-list',)

export const registerUserApi=(registerData)=>apiClient.post('/food/accounts',registerData)

export const helloapi=()=>axios.get('http://localhost:8081/hello');

export const verifyLoginApi=(batoken)=>axios.get('http://localhost:8081/verify',{
  headers:{
    Authorization:batoken
  }
})