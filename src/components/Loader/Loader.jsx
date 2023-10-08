import React, { useEffect, useState } from 'react'
import LogoLoader from './LogoLoader';
import PostLoader from './PostLoader';

const Loader = () => {

    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=>{


        setTimeout(()=>{
            setIsLoading(false)
        },3750)

    },[])

  return (
    <div>
      {
        isLoading ? <LogoLoader /> : <PostLoader /> 
      }
    </div>
  )
}

export default Loader
