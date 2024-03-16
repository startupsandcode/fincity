'use client'
import styles from '../page.module.scss';
import pageStyles from './dashboard.module.scss';
import { useState } from 'react';

export default function Dashboard() {
  const [postData, setPostData] = useState(null);

  const fetchData = async () => {
    try {
      let ticker = document.getElementById('ticker').value;
      const response = await fetch(`http://localhost:3000/api/tickers?ticker=${ticker}`);
      const data = await response.json();
      console.log(data);
      setPostData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className={styles.main}>
    <div className={pageStyles.content}>
      <div className={pageStyles.inputContainer}>
      <input id="ticker" type="text" placeholder="Enter a ticker symbol" />
      <button onClick={fetchData}>Fetch Data</button>
      </div>
      <div className={pageStyles.dataContainer}>
      {postData ? (
        <div>
          <p className={pageStyles.value}>Ticker: {postData.ticker}</p>
          <hr className={pageStyles.ruleset} />
          <p className={pageStyles.value}>Open: {postData.results[0].o}</p>
          <p className={pageStyles.value}>Close: {postData.results[0].c}</p>
          <hr className={pageStyles.ruleset} />
          <p className={pageStyles.value}>High: {postData.results[0].h}</p>
          <p className={pageStyles.value}>Low: {postData.results[0].l}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
      </div>
    </div>
    </main>
  );
}
