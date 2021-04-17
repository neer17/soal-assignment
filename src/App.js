import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Sidebar from './components/sidebar/Sidebar'
import UsersList from './screens/users-list/UsersList'
import UserDetails from './screens/users-details/UserDetails'
import Login from './screens/login/Login'
import PrivateRoute from './PrivateRoute'

import store from './store/store'

import styles from './App.module.css'

import logo from './logo.svg'
// import './App.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={styles.root}>
            <Sidebar />
            <div className={styles.rightSide}>
              <Switch>
                <Route exact path="/" component={UsersList} />
                <PrivateRoute
                  exact
                  path="/user-details"
                  component={UserDetails}
                />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
