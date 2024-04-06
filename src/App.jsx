import React from 'react';
import NavigationBar from './containers/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
    <ChakraProvider>
    <NavigationBar></NavigationBar>
            <Outlet />
    <Footer></Footer>
    </ChakraProvider>
  )
}

export default App