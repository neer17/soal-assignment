import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ _, ...rest }) => {
  const { userDetails } = useSelector(state => state.userDetails)
  console.info(userDetails)
  return (
    <Route
      {...rest}
      render={props =>
        userDetails ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute
