import axios from 'axios';
import apiURL from '../../src/config/APIUrls';

export const fetchAllArticles = () => {
    return fetchAllArticlesAsync()
      .then((data) => {
        console.log("data ->", data);
        return data.data.items;
      })
      .catch((error: any) => {
        console.log('error 1->', error);
      });
  };

async function fetchAllArticlesAsync() {
  try {
    const response = await axios.get(apiURL.rss_abc_news_feed);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
}

