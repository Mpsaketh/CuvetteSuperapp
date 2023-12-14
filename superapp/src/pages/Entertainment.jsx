import React from 'react';
import User from '../assets/images/UserSmall.png';

import Movies from '../Components/Movies/Movies';
import { useNavigate } from 'react-router-dom';

const Entertainment = () => {
  const MoviesData = JSON.parse(localStorage.getItem('category'));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard');
  };

  const UserImg = {
    position: 'absolute',
    right: '30px',
    top: '20px',
    cursor: 'pointer',
  };

  const heading = {
    color: '#72DB73',
    fontFamily: 'Single Day',
    fontSize: '47.333px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '139.688%',
    margin: '0',
    marginLeft: '20px',
  };
  const subheading = {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '30.424px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '139.688%' /* 42.499px */,
    letterSpacing: '0.608px',
    marginLeft: '40px',
  };
  return (
    <>
      <img
        style={UserImg}
        height="70px"
        src={User}
        alt="user"
        onClick={handleClick}
      />
      <div
        style={{
          background: 'black',
          minHeight: '100vh',
          width: '100vw',
          overflowX: 'hidden',
        }}
      >
        <h3 style={heading}>Super app</h3>
        <p style={subheading}>Entertainment according to your choice</p>
        {MoviesData.map((movie, index) => (
          <Movies key={index} genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Entertainment;
