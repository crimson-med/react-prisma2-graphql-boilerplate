import React from 'react';
import './scss/app.scss';
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import Logo from './components/brand/Logo';
import { useOvermind } from './overmind'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigation from './components/navigation/Navigation';


function PrivateRoute ({component: Component, authed, ...rest}: any) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

const App = () => {
  const { state } = useOvermind();
  const headerSpacing = (state.user.isAuthed) ? "content" : ""
  return (
    <Router>
      <div className="App">
        {state.user.isAuthed ? (<Navigation/>) : (
            <header className="App-header">
              <h1>{state.title}</h1>
              <Logo/>
            </header>
        )}
        <div className={headerSpacing}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute authed={state.user.isAuthed} path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
