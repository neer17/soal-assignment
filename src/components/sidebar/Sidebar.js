import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { RiDashboardFill } from 'react-icons/ri'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsListTask } from 'react-icons/bs'
import { CgLogOut } from 'react-icons/cg'

import * as UserDetailsActions from './../../store/actions/userDetails'

import styles from './Sidebar.module.css'

class Sidebar extends Component {
  state = {
    userDetails: null,
    selectedTab: 'Users',
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.userDetails && this.props.userDetails) {
      this.setState({
        userDetails: this.props.userDetails,
        selectedTab: 'Dashboard',
      })
    }
    if (prevProps.userDetails && !this.props.userDetails) {
      this.setState({
        selectedTab: 'Users',
      })
    }
  }
  navigateLogin = () => {
    this.props.history.push('/login')
  }

  handleLogout = () => {
    this.props.successLogin(null)
  }
  render() {
    const { selectedTab, userDetails } = this.state

    return (
      <div className={styles.root}>
        <section className={styles.upper_section}>
          {userDetails ? (
            <>
              <div className={styles.user_image}>
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="User Image"
                />
              </div>
              <div className={styles.username}>John Doe</div>
              <div className={styles.user_id}>
                <span>User Id: </span>
                <span>a1189876</span>
              </div>
            </>
          ) : (
            <div className={styles.login_btn} onClick={this.navigateLogin}>
              Login
            </div>
          )}
        </section>

        <section className={styles.middle_section}>
          <div
            style={
              selectedTab === 'Dashboard'
                ? {
                    boxShadow: '9px 17px 15px -5px rgba(119,119,119,0.75)',
                    backgroundColor: 'white',
                  }
                : {}
            }
          >
            <IconContext.Provider value={{ color: 'grey' }}>
              <RiDashboardFill />
            </IconContext.Provider>
            <div>Dashboard</div>
          </div>
          <div>
            <IconContext.Provider value={{ color: 'grey' }}>
              <AiTwotoneCalendar />
            </IconContext.Provider>
            <div>Calendar</div>
          </div>
          <div
            style={
              selectedTab === 'Users'
                ? {
                    boxShadow: '9px 17px 15px -5px rgba(119,119,119,0.75)',
                    backgroundColor: 'white',
                  }
                : {}
            }
          >
            <IconContext.Provider value={{ color: 'grey' }}>
              <FiUsers />
            </IconContext.Provider>
            <div>Users</div>
          </div>
          <div>
            <IconContext.Provider value={{ color: 'grey' }}>
              <BsListTask />
            </IconContext.Provider>
            <div>Tasks</div>
          </div>
        </section>

        <section className={styles.end_section}>
          {userDetails ? (
            <div>
              <IconContext.Provider value={{ color: 'grey' }}>
                <CgLogOut />
              </IconContext.Provider>
              <div className={styles.logout} onClick={this.handleLogout}>
                Logout
              </div>
            </div>
          ) : null}
        </section>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    userDetails: state.userDetails.userDetails,
  }
}

const mapDispatchToProps = {
  successLogin: UserDetailsActions.successLogin,
}
export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Sidebar))
