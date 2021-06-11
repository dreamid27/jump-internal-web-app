/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/tickets';

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async() => {
        try {
            setIsLoading(true);
            const res = await axios.get(urlApi);
            console.log(res.data);
            setTickets(res.data);
        } catch (err) {
            console.log(err.message);
            console.log(err.status);
        } finally {
            setIsLoading(false);
        }
    }, [])
    return { tickets, isLoading };
};

export default useTickets;
