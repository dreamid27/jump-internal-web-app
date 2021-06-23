/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import normalizerDataSource from '../normalizer/normalizerDataSource';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/tickets';

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async() => {
        try {
            setIsLoading(true);
            const res = await axios.get(urlApi);
            const dataSource = normalizerDataSource(res.data);
            setTickets(dataSource);
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


