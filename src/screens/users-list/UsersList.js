import React, { Component } from 'react'

import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import { userList } from './../../json-data/userList.json'
import styles from './UsersList.module.css'

export default class UsersList extends Component {
  render() {
    return (
      <div className={styles.root}>
        {userList?.map(({ coverURL, imageURL, name, profession, address }) => (
          <div className={styles.card}>
            <img src={coverURL} alt="Cover" className="card-img-top" />
            <div className={`${styles.card_body} text-center`}>
              <img
                src={imageURL}
                style={{ width: '100px', marginTop: '-65px' }}
                alt="User"
                className="img-fluid img-thumbnail rounded-circle border-0 mb-3"
              />
              <h5 className={styles.card_title}>{name}</h5>
              <p className="text-secondary mb-1">{profession}</p>
              <p className="text-muted font-size-sm">{address}</p>
            </div>
            <div className={styles.card_footer}>
              <IconContext.Provider value={{ color: '#097DEB', size: 25 }}>
                <FaFacebook />
              </IconContext.Provider>
              <IconContext.Provider value={{ color: 'green', size: 25 }}>
                <FaWhatsapp />
              </IconContext.Provider>
              <IconContext.Provider value={{ color: '#0A66C2', size: 25 }}>
                <FaLinkedin />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
