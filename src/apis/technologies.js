import axios from 'axios';
import { ENV } from './constants';

export function fetchTechnologies() {
    return axios.get(`${ENV}/technologies`)
        .then(function (response) {
            const { technologies } = response.data;
            return technologies;
        });
}

export function fetchYearsExperience() {
    return axios.get(`${ENV}/years_experience`)
        .then(function (response) {
            const { years_experience } = response.data;
            return years_experience;
        });
}