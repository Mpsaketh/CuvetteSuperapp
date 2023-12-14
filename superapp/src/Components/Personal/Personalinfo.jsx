import React, { useState } from 'react';
import styles from './Personal.module.css';
import PImg from '../../assets/images/PImg.png'

const PersonalInfo = () => {
  const personalInfo = JSON.parse(localStorage.getItem('UserData'));
  const browse = JSON.parse(localStorage.getItem('category'));

  const Tags = ({ category }) => {
    return (
      <div
        className={styles.categoryContainer}
        style={{ overflowY: `${category.length > 4 ? 'scroll' : 'hidden'}` }}
      >
        {category.map((genre, index) => (
          <div key={index} className={styles.categoryTask}>
            {genre}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.personalInfo}>
      <div className={styles.personalImg}>
        <img src={PImg} alt="PImg" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{personalInfo.Name}</p>
        <p className={styles.email}>{personalInfo.Email}</p>
        <p className={styles.user}>{personalInfo.UserName}</p>
        <Tags category={browse}></Tags>
      </div>
    </div>
  );
};

export default PersonalInfo;
