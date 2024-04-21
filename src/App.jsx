import React from 'react';
import NavigationBar from './containers/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import './i18n';
import { ErrorBoundary } from './ErrorBoundary';

function App() {

  return (
    <ChakraProvider>
      <ErrorBoundary>
    <NavigationBar></NavigationBar>
            <Outlet />
    <Footer></Footer>
    </ErrorBoundary>
    </ChakraProvider>
  )
}

export default App