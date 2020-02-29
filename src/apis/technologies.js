import axios from 'axios';
import { ENV } from './constants';

export function fetchTechnologies() {
    return axios.get(`${ENV}/technologies`)
        .then(function (response) {
            const { technologies } = response.data;
            return technologies;
        });
}