import axios from 'axios';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/tickets/:';

const usePostTicket = (data) => {
    try {
        const res = axios.post(urlApi, data);
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }
};

export default usePostTicket;