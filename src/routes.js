import React from 'react';
import {IndexRoute, Route,Router} from 'react-router';
import {
    Login,
    Home,
} from './containers';

const Root = ({children}) => (<section>{children}</section>)

export default (store) => {
  const requireLogin = (nextState,replace,callback)=>{
    const logined  = store.getState().auth.logined||window.sessionStorage.logined;
    if (!logined) {
      replace('/');
    }
    callback();
  }
  return (
    <Route path="/" component={Root}>
      <IndexRoute component={Login}/>
      <Route path="login" component={Login}/>
      <Route onEnter={requireLogin}>
        <Route path="home" component={Home}/>
      </Route>
   </Route>
  )
}
