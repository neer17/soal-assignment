import React, { Component } from 'react'

import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import image1 from './../../assets/avatar1.jpg'
import image2 from './../../assets/avatar2.jpg'
import image3 from './../../assets/avatar3.jpg'
import image4 from './../../assets/avatar4.jpg'
import image5 from './../../assets/avatar5.jpg'
import image6 from './../../assets/avatar6.jpg'
import image7 from './../../assets/avatar7.jpg'

import { userList } from './../../json-data/userList.json'
import styles from './UsersList.module.css'

export default class UsersList extends Component {
  getRandomImage = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7]
    const randomNumber = Math.round(Math.random() * 6)

    console.info(randomNumber)
    return images[randomNumber]
  }
  render() {
    return (
      <div className={styles.root}>
        {userList?.map(
          ({ coverURL, imageURL, name, profession, address }, index) => (
            <div className={styles.card}>
              <img src={coverURL} alt="Cover" className="card-img-top" />
              <div className={`${styles.card_body} text-center`}>
                <img
                  src={this.getRandomImage()}
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
          )
        )}
      </div>
    )
  }
}
