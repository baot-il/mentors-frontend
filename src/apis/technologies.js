import axios from "axios";

export function fetchTechnologies() {
  return axios
    .get(`${process.env.REACT_APP_ENV}/technologies`)
    .then(function(response) {
      const { technologies } = response.data;
      return technologies;
    });
}

export function fetchYearsExperience() {
  return axios
    .get(`${process.env.REACT_APP_ENV}/years_experience`)
    .then(function(response) {
      const { years_experience } = response.data;
      return years_experience;
    });
}
