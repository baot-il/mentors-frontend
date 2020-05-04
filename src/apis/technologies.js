import axios from "axios";

export function fetchTechnologies(idToken) {
  console.log('idToken', 'idToken', idToken)
  return axios
    .get(`${process.env.REACT_APP_ENV}/technologies`, {
      headers: {
        Authorization: "Bearer " + idToken
    }})
    .then(function(response) {
      const { technologies } = response.data;
      return technologies;
    });
}

export function fetchYearsExperience(idToken) {
  console.log('idToken', 'idToken', idToken)
  return axios
    .get(`${process.env.REACT_APP_ENV}/years_experience`, {
      headers: {
        Authorization: "Bearer " + idToken
    }})
    .then(function(response) {
      const { years_experience } = response.data;
      return years_experience;
    });
}
