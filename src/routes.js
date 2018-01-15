import React from 'react';
import {IndexRoute, Route,Router} from 'react-router';
import {
    Login,
    Home,
    Undo,UndoDetail,UndoAdd,
    Checking,
    Done,
    Fail,
    Message,
    Account,
    Blacklist,
    Archives,
    SystemInfo
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
        <Route path="home" component={Home}>
          <IndexRoute component={Undo}/>
          <Route path="undo" component={Undo}/>
          <Route path="undo/:id" component={UndoDetail}/>
          <Route path="undo_add" component={UndoAdd}/>

          <Route path="checking" component={Checking}/>
          <Route path="done" component={Done}/>
          <Route path="fail" component={Fail}/>
          <Route path="message" component={Message}/>

          <Route path="account" component={Account}/>
          <Route path="blacklist" component={Blacklist}/>
          <Route path="archives" component={Archives}/>
          <Route path="systemInfo" component={SystemInfo}/>
        </Route>
      </Route>
   </Route>
  )
}
