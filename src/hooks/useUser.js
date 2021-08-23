import { useEffect, useState } from "react";
import getUser from "../api/getUser";

const useUser = () => {
    const [user, setUser] = useState({})
    
    useEffect(() => {
      const lsUser = localStorage.getItem('user');
      if (lsUser) {
        setUser(JSON.parse(lsUser))
      } else {
        getUser().then(userData => {
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))
        })
      }
    }, [])
    
    return user
  }

export default useUser