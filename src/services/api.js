import axios from 'axios';

const opendotaApi = axios.create({
    baseURL: 'https://api.opendota.com/api',
});

export const fetchHeroes = async () => {
    try {
        const response = await opendotaApi.get('/heroStats');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};