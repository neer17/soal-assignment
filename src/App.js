import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar'
import UsersList from './screens/users-list/UsersList'
import UserDetails from './screens/users-details/UserDetails'

import styles from './App.module.css'

import logo from './logo.svg'
// import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.rightSide}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={UsersList} />
              <Route exact path="/user-details" component={UserDetails} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
