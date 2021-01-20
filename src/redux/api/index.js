import axios  from 'axios';

const baseURL= 'http://www.omdbapi.com/?apikey=7ca6751d';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL+ url,
    data,
    headers,
    
});