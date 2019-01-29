// Axios is a lightweight HTTP client based similar to a Fetch API. 
// Axios is promise-based async/await library for the readable asynchronous code. 
// We can easily integrate with React.js, and it is effortless to use in any frontend framework. ... 
// It has a very brief intro about React and Redux.

import axios from 'axios';

// Fetch the data
export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
    .then(resp => resp.data);

};

export const fetchContestList = () => {
  return axios.get('/api/contests')
              .then(resp => resp.data.contests);
};

export const fetchNames = nameIds => {
  return axios.get(`/api/names/${nameIds.join(',')}`)
              .then(resp => resp.data.names);
};

// Define an API for this addName, so we definitely want to export that as well. 
export const addName = (newName, contestId) => {
  return axios.post('/api/names', { newName, contestId })
              .then(resp => resp.data);
};