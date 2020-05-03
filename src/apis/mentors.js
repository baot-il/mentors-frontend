import axios from "axios";

export function fetchMentor(mentorId) {
  return axios
    .get(`${process.env.REACT_APP_ENV}/mentors/${mentorId}`)
    .then(function(response) {
      const { mentors } = response.data;
      return mentors;
    });
}

export function updateMentor(mentorId, mentorData) {
  return axios
    .put(`${process.env.REACT_APP_ENV}/mentors/${mentorId}`, mentorData)
    .then(function(response) {
      const { mentors } = response.data;
      return mentors;
    });
}

export async function fetchAllMentors() {
  let response = await axios.get(`${process.env.REACT_APP_ENV}/mentors`);
  const { data } = response;
  return data;
}
