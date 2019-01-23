import axios from 'axios';

// Fetch the data
export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
    .then(resp => resp.data);

};