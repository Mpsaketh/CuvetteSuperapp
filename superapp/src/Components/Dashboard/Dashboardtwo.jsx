import React from 'react';
import PersonalInfo from '../Personal/Personalinfo';
import Weather from '../Weather/Weather';
import News from '../News/News';
import styles from './Dashboard.module.css';
import Notes from '../Notes/Notes';
import Timer from '../Timer/Timer';
import { useNavigate } from 'react-router-dom';

const DashboardComp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/entertainment');
  };
  return (
    <div className={styles.dashContainer}>
      <div>
        <PersonalInfo />
        <Weather />
        <Timer />
      </div>

      <Notes />

      <div className={styles.dashNews}>
        <News />
        <button className={styles.browse} onClick={handleClick}>
          Browse
        </button>
      </div>
    </div>
  );
};

export default DashboardComp;