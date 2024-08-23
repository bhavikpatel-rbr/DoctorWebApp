import React from 'react'
import AppNavigation from './navigation/AppNavigation';
import AuthNavigation from './navigation/AuthNavigation';
import './assest/css/index.scss'
import { useSelector } from 'react-redux';
import { authSelector } from './reduxtool/auth/authSlice';
import Loader from './component/AppLoader';
import ScrollToTop from './utils/scrollToTop';

function App() {
  const { token } = useSelector(authSelector)

  return (
    <>
      <Loader />
      <ScrollToTop />
      {token ? <AppNavigation /> : 
      
       <AuthNavigation />
      //<AppNavigation />
      }
    </>
  );
}

export default App;
