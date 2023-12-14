import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

const News = () => {
  const [getNews, setGetNews] = useState('');
  const [date, setDate] = useState('');
  const [random] = useState(Math.ceil(Math.random() * 10));
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };

  useEffect(() => {
    const getNews = async () => {
      await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_31277b6f72c6fa355598f9ad10565fe208a70&q=pizza'
      )
        .then(async (data) => await data.json())
        .then((res) => setGetNews(res.results[random]));
      // console.log(getNews);
    };
    getNews();
  }, []);

  useEffect(() => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const format = dd + '-' + mm + '-' + yyyy;
    setDate(format);
  }, []);
  return (
    <div className={styles.NewsContainer}>
      <div
        className={styles.newsImgages}
        alt="NewsImg"
        style={{ backgroundImage: `url(${getNews.image_url})` }}
      >
        <div className={styles.newsHeadlines}>
          {getNews.title}
          <div className={styles.newsTime}>
            <span>{date} ||</span>
            {new Date(getNews.pubDate).toLocaleTimeString('en-us', options)}
          </div>
        </div>
      </div>
      <div className={styles.newsPara}>{getNews.description}</div>
    </div>
  );
};

export default News;
