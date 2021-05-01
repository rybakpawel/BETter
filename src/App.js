import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './jsx/components/Header';
import Menu from './jsx/components/Menu';
import Bet from './jsx/pages/Bet';
import LogIn from './jsx/components/LogIn';
import Footer from './jsx/components/Footer';
import Competition from './jsx/pages/Competition';
import Main from './jsx/pages/Main';
import Register from './jsx/pages/Register';
import Rules from './jsx/pages/Rules';
import Table from './jsx/pages/Table';

import AuthContext from './jsx/context/authContext'
import DeviceContext from './jsx/context/deviceContext'
import LoginContext from './jsx/context/loginContext'
import MenuContext from './jsx/context/menuContext'

import './styles/Styles.css';

function App() {

  const checkOrientation = () => {
    const { innerWidth: width, innerHeight: height } = window
    if (width > height) return 'landscape'
    else if (width < height && width > 599) return 'portrait-tablet'
    else return 'portrait'
  }

  const [isLogged, setIsLogged] = useState(false)
  const [orientation, setOrientation] = useState(checkOrientation())
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(false)

  const [zIndex, setZIndex] = useState(isMenuActive ? 'navigation--active-z-index' : '');
  const [isAnimationActive, setIsAnimationActive] = useState('');

  const changeOrientation = () => {
    const { innerWidth: width, innerHeight: height } = window
    if (width > height) setOrientation('landscape') 
    else if (width < height && width > 599) setOrientation('portrait-tablet')
    else setOrientation('portrait')
  }

  const menuAnimation = () => {
    let time = 0;
    if (orientation !== 'portrait') time = 300;
    if (!isMenuActive) {
        setIsAnimationActive('navigation--animation-menu-in');
        setTimeout(() => {
            setZIndex('navigation--active-z-index');
        }, time);
    } else {
        setIsAnimationActive('navigation--animation-menu-out');
        setTimeout(() => {
            setZIndex('')
        }, 300);
    }
}

  const toggleActiveMenu = () => {
    setIsMenuActive(!isMenuActive)
    menuAnimation();
  }

  const location = useLocation();
  
  return (
    <>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <DeviceContext.Provider value={{ orientation, changeOrientation }}>
        <LoginContext.Provider value={{ isLoginActive, setIsLoginActive }}>
          <MenuContext.Provider value={{ isMenuActive, toggleActiveMenu, zIndex, isAnimationActive }}>
            {/* <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={30000}
                classNames='fade'> */}
                <>
                  <TransitionGroup>
                    <CSSTransition 
                      key={location.key}
                      timeout={300}
                      classNames='fade'>
                        <Switch location={location}>
                          <Route path="/" exact component={Main}/>
                          <Route path="/bet" component={Bet}/>
                          <Route path="/competition" component={Competition}/>
                          <Route path="/register" component={Register}/>
                          <Route path="/rules" component={Rules}/>
                          <Route path="/table" component={Table}/>
                        </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                  <Switch>
                    <Route path="/" exact
                          render={(props) => (<Header {...props} activeComponent={'main'} />)}
                    />
                    <Route path="/register" 
                          render={(props) => (<Header {...props} activeComponent={'register'} />)}
                    />
                    <Header />
                  </Switch>
                  <Switch>
                    <Route path="/bet" 
                           render={(props) => (<Menu {...props} activeComponent={'bet'} />)}
                    />
                    <Route path="/competition" 
                           render={(props) => (<Menu {...props} activeComponent={'competition'} />)}
                    />
                    <Route path="/rules" 
                           render={(props) => (<Menu {...props} activeComponent={'rules'} />)}
                    />
                    <Route path="/table" 
                           render={(props) => (<Menu {...props} activeComponent={'table'} />)}
                    />
                    <Menu />
                  </Switch>
                  <Switch>
                    <Route path="/rules" 
                           render={(props) => (<Footer {...props} icons={true} />)}
                    />
                    <Footer />
                  </Switch>
                  {isLoginActive ? <LogIn /> : null}
                </>
              {/* </CSSTransition> */}
            {/* </TransitionGroup> */}
          </MenuContext.Provider>
        </LoginContext.Provider>
        </DeviceContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
