/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format, formatDistanceToNow, parseISO } from 'date-fns';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/tickets';

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async() => {
        try {
            setIsLoading(true);
            const res = await axios.get(urlApi);
            const dataSource = res.data;
            setTickets(
                dataSource.map(row => (
                    {
                        key: row.id,
                        tiketDetailsImages: row.avatar,
                        tiketDetailsStatus: row.notes,
                        tiketDetailsUpdate: formatDistanceToNow(parseISO(row.createdAt)),
                        customerName: row.name,
                        customerNameOn: format(parseISO(row.createdAt), 'dd.mm.yyyy'),
                        date: format(parseISO(row.date), 'MMM dd, yyyy'),
                        dateTime: format(parseISO(row.date), 'h.mm a'),
                        priority: row.priority,
                    }
                ))
            );
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


