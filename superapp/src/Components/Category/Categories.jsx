import React, { useEffect, useState } from 'react';
import action from '../../assets/images/Action.png';
import drama from '../../assets/images/Drama.png';
import romance from '../../assets/images/Romance.png';
import thirller from '../../assets/images/Thriller.png';
import western from '../../assets/images/Western.png';
import horror from '../../assets/images/Horror.png';
import fantasy from '../../assets/images/Fantasy.png';
import music from '../../assets/images/Music.png';
import fiction from '../../assets/images/Fiction.png';
import warning from '../../assets/images/warning.png';
import { useNavigate } from 'react-router-dom';
import styles from './Category.module.css';

const Categories = () => {
  const defaultCategory = [
    {
      id: 1,
      name: 'Action',
      color: '#FF5209',
      image: <img src={action} alt="action" />,
    },
    {
      id: 2,
      name: 'Drama',
      color: '#D7A4FF',
      image: <img src={drama} alt="drama" />,
    },
    {
      id: 3,
      name: 'Romance',
      color: '#148A08',
      image: <img src={romance} alt="romance" />,
    },
    {
      id: 4,
      name: 'Thriller',
      color: '#84C2FF',
      image: <img src={thirller} alt="thirller" />,
    },
    {
      id: 5,
      name: 'Western',
      color: '#902500',
      image: <img src={western} alt="western" />,
    },
    {
      id: 6,
      name: 'Horror',
      color: '#7358FF',
      image: <img src={horror} alt="horror" />,
    },
    {
      id: 7,
      name: 'Fantasy',
      color: '#FF4ADE',
      image: <img src={fantasy} alt="fantasy" />,
    },
    {
      id: 8,
      name: 'Music',
      color: '#E61E32',
      image: <img src={music} alt="music" />,
    },
    {
      id: 9,
      name: 'Fiction',
      color: '#6CD061',
      image: <img src={fiction} alt="fiction" />,
    },
  ];
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleButton = () => {
    if (category.length < 3) {
      setError(true);
      return;
    } else {
      setError(false);
      localStorage.setItem('category', JSON.stringify([...category]));
      navigate('/dashboard');
      console.log(category);
    }
  };

  const Cards = ({ cardData, ids, category, setCategory }) => {
    const [borderSelect, setBorderSelect] = useState();
    const handleClick = (e) => {
      if (category.includes(cardData.name)) {
        const idx = category.indexOf(cardData.name);
        category.splice(idx, 1);
        setCategory([...category]);
      } else {
        setCategory([...category, cardData.name]);
      }
      setBorderSelect(!borderSelect);
    };
    useEffect(() => {
      setBorderSelect(category.includes(cardData.name) === true);
    }, [category, cardData.name]);

    return (
      <div
        onClick={(e) => {
          handleClick(e);
        }}
        key={ids}
        style={{
          background: cardData['color'],
          padding: '16px',
          borderRadius: '12px',
          border: `${borderSelect ? '4px solid #11B800' : ''}`,
        }}
      >
        <h4 className={styles.Text}>{cardData.name}</h4>
        {cardData.image}
      </div>
    );
  };
  const handleRemove = (defaultCategoryName) => {
    const remove = category.filter(
      (cardData) => cardData !== defaultCategoryName
    );

    setCategory([...remove]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <h4 className={styles.logo}>Super app</h4>
        <p className={styles.description}>Choose your entertainment category</p>
        {/* <Tags category={category} setCategory={setCategory} /> */}
        <div className={styles.rename}>
          {category.map((defaultCategoryName) => (
            <div key={defaultCategoryName} className={styles.addRename}>
              {defaultCategoryName}
              <span
                className={styles.remove}
                onClick={() => handleRemove(defaultCategoryName)}
              >
                X
              </span>
            </div>
          ))}
        </div>

        {error && category.length < 3 ? (
          <p className={styles.warning}>
            <img src={warning} alt="warning"></img> Minimum 3 category required
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.boxes}>
        {defaultCategory.map((cardData, ids) => (
          <Cards
            key={ids}
            cardData={cardData}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </div>
      <button className={styles.nxtButton} onClick={handleButton}>
        Next Page
      </button>
    </div>
  );
};

export default Categories;