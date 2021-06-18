import { CustomerNameView, DateView, HighLevel, NormalLevel, LowLevel, TiketDetailsView } from "./styles";
import { DotsThreeVertical } from 'phosphor-react';
// import { format, formatDistanceToNow, parseISO } from 'date-fns';

// export const normalizerDataSource = (dataSource) => {
//     return dataSource.map(row => (
//         {
//             key: row.id,
//             tiketDetailsImages: row.avatar,
//             tiketDetailsStatus: row.notes,
//             tiketDetailsUpdate: formatDistanceToNow(parseISO(row.createdAt)),
//             customerName: row.name,
//             customerNameOn: format(parseISO(row.createdAt), 'dd.mm.yyyy'),
//             date: format(parseISO(row.date), 'MMM dd, yyyy'),
//             dateTime: format(parseISO(row.date), 'h.mm a'),
//             priority: row.priority,
//         }
//     ));
// };



export const columns = [
    {
        title: 'Tiket Details',
        dataIndex: 'tiketDetails',
        key: 'tiketDetails',
        render: (text, record) => {
            return (
                <TiketDetailsView>
                    <img src={record.tiketDetailsImages} alt='AvatarUser'/>
                    <div>
                        <h1> {record.tiketDetailsStatus} </h1>
                        <h2> Upadate {record.tiketDetailsUpdate} ago </h2>
                    </div>
                </TiketDetailsView>
            );
        },
    },
    {
        title: 'Customer Name',
        dataIndex: 'customerName',
        key: 'customerName',
        render: (text, record) => {
            return (
                <CustomerNameView>
                    <h1>
                        {record.customerName}
                    </h1>
                    <h2>
                        on {record.customerNameOn}
                    </h2>
                </CustomerNameView>
            );
        },
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (text, record) => {
            return (
                <DateView>
                    <h1>
                        {record.date}
                    </h1>
                    <h2>
                        {record.dateTime}
                    </h2>
                </DateView>
            );
        },
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
        render: (text, record) => {
            if (record.priority === 1) {
                return <HighLevel>
                            <div>HIGH</div> 
                            <DotsThreeVertical />
                        </HighLevel> 
            }else if (record.priority === 2) {
                return <NormalLevel>
                            <div>NORMAL</div>
                            <DotsThreeVertical />
                        </NormalLevel> 
            }else if (record.priority === 3) {
                return <LowLevel>
                            <div>LOW</div>
                            <DotsThreeVertical />
                        </LowLevel> 
            }
        },
        sorter: (a, b) => a.priority - b.priority,
        sorOrder: 1,
    },
];

export default columns;