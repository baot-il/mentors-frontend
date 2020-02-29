import axios from 'axios';
import { ENV } from './constants';

export function fetchMentor(mentorId){
    return axios.get(`${ENV}/mentors/${mentorId}`)
        .then(function (response) {
            const { data } = response;
            return data;
        });
}

