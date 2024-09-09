import { createContext, useState , useEffect } from "react";
import {apiClient, retrieveFoodApi, verifyLoginApi } from "../API/FoodApi";

export const FoodContext = createContext();

function ContextProvider({children}){

    const[items,setItems]=useState([]);
    const[specificItems,setSpecificItems]=useState([]);
    const[isAuthenticated,setAuthenticated]=useState(false);
    const [activeComponent,setActiveComponent]=useState('home');
    const[username,setUsername]=useState('');
    const[token,setToken]=useState();
    
    useEffect(() => {
        if (token) {
            retrieveFoodItems();
            console.log("Data fetched with token:", token);
        }
    }, [token]);

    const retrieveFoodItems = async () => {
        try {
            const response = await retrieveFoodApi();
            setItems(response.data);
            setSpecificItems(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleBreakfast=()=>{
       const filtered = items.filter((data)=>{
        return data.type==="breakfast";
       })
       setSpecificItems(filtered);
    }

    const handleLunch=()=>{
        const filtered = items.filter((data)=>{
            return data.type==="lunch"
        })
        setSpecificItems(filtered);
    }

    const handleDinner=()=>{
        const filtered = items.filter((data)=>{
            return data.type==="dinner";
        })
        setSpecificItems(filtered);
    }
    const handleSearch=(event)=>{
        const text = event.target.value;
        const filtered = items.filter((data)=>{
            return data.name.toLowerCase().includes(text.toLowerCase());
        });
        setSpecificItems(filtered);
    }
    const handleActiveComponent=(value)=>{
        setActiveComponent(value);
    }

    const login=async(username,password)=>{
        const batoken = 'Basic '+window.btoa(username+":"+password);
        const response = await verifyLoginApi(batoken);
        if(response.status==200){
            setToken(batoken);
            localStorage.setItem('authToken', batoken);
            setAuthenticated(true)
            setUsername(username);
            console.log("token is"+token);
            return true;
        }
        else{
            setAuthenticated(false)
            setUsername('');
            return false;
        }
    }

    return (
        <FoodContext.Provider value={{handleBreakfast,handleLunch,
         handleDinner, handleSearch, specificItems,
          activeComponent, handleActiveComponent,login,isAuthenticated,token}}>
                {children}
            </FoodContext.Provider>
    )
}
export default ContextProvider;