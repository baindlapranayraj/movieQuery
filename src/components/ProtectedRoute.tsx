import  { PropsWithChildren, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verification } from '../appwrite/authentication/authen';
import { Models } from 'appwrite';

const ProtectedRoute = ({children}:PropsWithChildren) => {

   

  const navigate = useNavigate();
  const [user,setUser] = useState< Models.User<Models.Preferences>>()

  useEffect(()=>{
   async()=>{
    try {
        const res = await verification();
        if(res){
            setUser(res)
        }
    } catch (error) {
        console.error(error)
    }
    if(user===undefined){
        navigate("/signup")
    }
   }
  },[navigate])

    return children
}

export default ProtectedRoute