import axios from 'axios';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/tickets/';

const useDeleteTicket = (idData) => {
    try {
        const res = axios.delete(urlApi+idData);
        console.log(res);
        // alert("Delete Success");
    } catch (err) {
        console.log(err.message);
    }
};

export default useDeleteTicket;