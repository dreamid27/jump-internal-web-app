import { format, formatDistanceToNow} from 'date-fns';

const normalizerDataSource = (dataSource) => {
    return dataSource.map(row => (
        {
            key: row.id,
            tiketDetailsImages: row.avatar,
            tiketDetailsStatus: row.notes,
            tiketDetailsUpdate:formatDistanceToNow(new Date(row.createdAt)),
            customerName: row.name,
            customerNameOn: format(new Date(row.createdAt), 'dd.mm.yyyy'),
            date: format(new Date(row.date), 'MMM dd, yyyy'),
            dateTime: format(new Date(row.date), 'h.mm a'),
            priority: row.priority,
            originalCreatedAt: row.createdAt,
            originalDate: row.date,
        }
    ));
};

export default normalizerDataSource;