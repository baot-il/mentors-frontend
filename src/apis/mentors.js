import axios from 'axios';
import { ENV } from './constants';

export function fetchMentor(mentorId){
    return axios.get(`${ENV}/mentors/${mentorId}`)
        .then(function (response) {
            const { mentors } = response.data;
            return mentors;
        });
}

export function updateMentor(mentorId, mentorData){
/*    return axios.put(`${ENV}/mentors/${mentorId}`)
        .then(function (response) {
            const { mentors } = response.data;
            return mentors;
        });*/
}

