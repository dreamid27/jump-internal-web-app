import { CustomerNameView, DateView, HighLevel, NormalLevel, LowLevel, TiketDetailsView } from "./styles";
import { DotsThreeVertical } from 'phosphor-react';
import Avatar from './images/photo.png';

export const columns = [
    {
        title: 'Tiket Details',
        dataIndex: 'tiketDetails',
        key: 'tiketDetails',
        render: (text, record) => {
            return (
                <TiketDetailsView>
                    <img src={record.tiketDetailsImages}/>
                    <div>
                        <h1> {record.tiketDetailsStatus} </h1>
                        <h2> {record.tiketDetailsUpdate} </h2>
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
                        {record.customerNameOn}
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

export const dataSource = [];

const isPrime = (num) => {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i === 0)
            return false;
    }
    return true;
}

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        if (isPrime(i)) {
            dataSource.push(
                {
                    key: i,
                    tiketDetailsImages: Avatar,
                    tiketDetailsStatus: 'Contact Email not Linked',
                    tiketDetailsUpdate: 'Update 1 day ago',
                    customerName: 'Tom Cruise ',
                    customerNameOn: 'on 24.05.2019',
                    date: 'May 16, 2019',
                    dateTime: '6.30 PM',
                    priority: 1,
                }
              );
        }
        else {
            dataSource.push(
                {
                    key: i,
                    tiketDetailsImages: Avatar,
                    tiketDetailsStatus: 'Contact Email not Linked',
                    tiketDetailsUpdate: 'Update 1 day ago',
                    customerName: 'Tom Cruise ',
                    customerNameOn: 'on 24.05.2019',
                    date: 'May 16, 2019',
                    dateTime: '6.30 PM',
                    priority: 3,
                }
              );
        }
    } else {
        dataSource.push(
            {
                key: i,
                tiketDetailsImages: Avatar,
                tiketDetailsStatus: 'Contact Email not Linked',
                tiketDetailsUpdate: 'Update 1 day ago',
                customerName: 'Tom Cruise ',
                customerNameOn: 'on 24.05.2019',
                date: 'May 16, 2019',
                dateTime: '6.30 PM',
                priority: 2,
            }
          );
    }
}