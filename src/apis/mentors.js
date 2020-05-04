import axios from "axios";

export async function fetchMentor(mentorId, idToken) {
  const response = await axios
    .get(`${process.env.REACT_APP_ENV}/mentors/${mentorId}`, {
      headers: {
        Authorization: "Bearer " + idToken
      }
    });
  const { mentors } = response.data;
  return mentors;
}

export async function updateMentor(mentorId, mentorData, idToken) {
  const response = await axios
    .put(`${process.env.REACT_APP_ENV}/mentors/${mentorId}`, mentorData, {
      headers: {
        Authorization: "Bearer " + idToken
      }
    });
  const { mentors } = response.data;
  return mentors;
}

export async function fetchAllMentors(idToken) {
  let response = await axios.get(`${process.env.REACT_APP_ENV}/mentors`, {
    headers: {
      Authorization: "Bearer " + idToken
  }});
  const { data } = response;
  return data;
}
