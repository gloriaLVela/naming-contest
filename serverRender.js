// fetch data from the api

// Fetching data from the server

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';


// Define the API url
const getApiUrl = contestId => {
  if (contestId) {
    return `${config.serverUrl}/api/contests/${contestId}`;
  }

  return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId , apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    };
  }

  return {
    contests: apiData.contests
  };
};


const serverRender = (contestId) =>
    axios.get(getApiUrl(contestId))
    .then(resp => {
        // Read the react code and render it to string
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />),
        initialData       
      };
    });

export default serverRender;