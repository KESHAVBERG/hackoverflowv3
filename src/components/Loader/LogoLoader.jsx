import React from 'react'
import logo from '../../images/loader_2.gif'

const LogoLoader = () => {
  return (
    <img src={logo} alt="" style={
        {
            height : '100vh',
            width : '100%',
            objectFit:"cover"
        }
    }/>
  )
}

export default LogoLoader
