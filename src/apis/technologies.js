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

export async function fetchTechnologies() {
    const idToken = await retrieveIdToken();
    return axios
        .get(`${process.env.REACT_APP_ENV}/technologies`, {
            headers: {
                Authorization: 'Bearer ' + idToken,
            },
        })
        .then(function (response) {
            const {technologies} = response.data;
            return technologies;
        });
}

export async function fetchYearsExperience() {
    const idToken = await retrieveIdToken();
    return axios
        .get(`${process.env.REACT_APP_ENV}/years_experience`, {
            headers: {
                Authorization: 'Bearer ' + idToken,
            },
        })
        .then(function (response) {
            const {years_experience} = response.data;
            return years_experience;
        });
}
