import React, { Suspense, useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Redirect, Router } from '@reach/router'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));
const Detail = React.lazy(() => import('./pages/Detail'));

export const App = () => {
  const {isAuth} = useContext(Context);
  return (
    <Suspense fallback={<div/>}>
      <GlobalStyle/>
      <Logo/>
      <Router>
        <NotFound default/>
        <Home path='/'/>
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId'/>
        {!isAuth && <NotRegisteredUser path='/login'/>}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow/>}
        {!isAuth && <Redirect from='/user' to='/login' noThrow/>}
        {isAuth && <Redirect from='/login' to='/'/>}
        <Favs path='/favs'/>
        <User path='/user'/>
      </Router>
      <NavBar/>
    </Suspense>
  )
};
