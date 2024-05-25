import {createContext, useState,useEffect} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user,setUser] = useState(null);
    
    const fetchUserData = async () => {
        const accessToken = localStorage.getItem('accessToken')
      
        if (!accessToken) {
          return null
        }
      
        try {
          const response = await fetch('http://localhost:3000/auth/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
        });

        if(response.ok){
          const userData = await response.json();
          setUser(userData);
          console.log(response.data);
        } else {
          throw new Error('Failed to fetch user data');
        }
       
        } catch (error) {
          console.error('Error fetching user data:', error);
          return null
        }
      };

      useEffect(() => {
        fetchUserData()
      }, []);
      
    return (
      <UserContext.Provider value={{user}}>
        {children}
      </UserContext.Provider>
    );
  }