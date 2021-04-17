import * as types from './../types'

// Login Actions
export const requestLogin = payload => ({ type: types.REQUEST_LOGIN, payload })
export const successLogin = payload => ({ type: types.LOGIN_SUCCESS, payload })
export const failureLogin = payload => ({ type: types.LOGIN_FAILURE, payload })
