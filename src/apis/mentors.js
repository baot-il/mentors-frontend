import axios from 'axios';
import * as firebase from 'firebase';

export async function retrieveIdToken() {
    const user = await firebase.auth().currentUser;
    if (user) {
        const idToken = await user.getIdToken();
        return idToken;
    } else {
        throw new Error('Could not retrieve user from firebase');
    }
}

export async function fetchMentor(userUid) {
    const idToken = await retrieveIdToken();
    const response = await axios.get(`${process.env.REACT_APP_ENV}/mentor`, {
        headers: {
            Authorization: 'Bearer ' + idToken,
        },
    });
    const {mentors} = response.data;
    return mentors;
}

export async function updateMentor(userUid, mentorData) {
    const idToken = await retrieveIdToken();
    const response = await axios.put(`${process.env.REACT_APP_ENV}/mentor`, mentorData, {
        headers: {
            Authorization: 'Bearer ' + idToken,
        },
    });
    const {mentors} = response.data;
    return mentors;
}

export async function allMentorsRawData() {
    const idToken = await retrieveIdToken();
    let response = await axios.get(`${process.env.REACT_APP_ENV}/mentors`, {
        headers: {
            Authorization: 'Bearer ' + idToken,
        },
    });
    const {data} = response;
    return data;
}
