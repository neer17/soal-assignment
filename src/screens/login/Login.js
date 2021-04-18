import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IconContext } from 'react-icons'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'

import * as UserDetailsActions from './../../store/actions/userDetails'

import styles from './Login.module.css'
class Login extends Component {
  state = {
    rightPanelActive: false,
  }

  changeBackground = buttonString => {
    let rightPanelActive = false
    if (buttonString === 'sign-up') rightPanelActive = true

    this.setState({
      rightPanelActive,
    })
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.successLogin({ name: 'John Doe' })
    this.props.history.replace('/user-details')
  }
  render() {
    const { rightPanelActive } = this.state

    return (
      <div className={styles.root}>
        <div
          className={
            rightPanelActive
              ? `${styles.container} ${styles.right_panel_active}`
              : styles.container
          }
        >
          <div
            className={`${styles.form_container} ${styles.sign_up_container}`}
          >
            <form action="#">
              <h1>Create Account</h1>
              <div className={styles.social_container}>
                <div>
                  <IconContext.Provider value={{ color: 'grey', size: 25 }}>
                    <FaFacebookF />
                  </IconContext.Provider>
                </div>
                <div>
                  <IconContext.Provider value={{ color: 'grey', size: 25 }}>
                    <FaGooglePlusG />
                  </IconContext.Provider>
                </div>
                <div>
                  <IconContext.Provider value={{ color: 'grey', size: 25 }}>
                    <FaLinkedinIn />
                  </IconContext.Provider>
                </div>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div
            className={`${styles.form_container} ${styles.sign_in_container}`}
          >
            <form onSubmit={this.handleLogin}>
              <h1>Sign in</h1>
              <div className={styles.social_container}>
                <div>
                  <IconContext.Provider value={{ color: 'grey', size: 25 }}>
                    <FaFacebookF />
                  </IconContext.Provider>
                </div>
                <div>
                  <IconContext.Provider value={{ color: 'grey', size: 25 }}>
                    <FaGooglePlusG />
                  </IconContext.Provider>
                </div>
                <div>
                  <IconContext.Provider value={{ color: 'grey', size: 25 }}>
                    <FaLinkedinIn />
                  </IconContext.Provider>
                </div>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className={styles.overlay_container}>
            <div className={styles.overlay}>
              <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className={styles.ghost}
                  onClick={() => this.changeBackground('sign-in')}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`${styles.overlay_panel} ${styles.overlay_right}`}
              >
                <h1>Welcome to SOAL</h1>
                <p>Login to go to the dashboard</p>
                <button
                  className={styles.ghost}
                  onClick={() => this.changeBackground('sign-up')}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  successLogin: UserDetailsActions.successLogin,
}
export default connect(null, mapDispatchToProps)(Login)
