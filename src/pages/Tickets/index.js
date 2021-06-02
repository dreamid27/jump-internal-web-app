import React from "react";
import Container, { Content, CustomerNameView, DateView, HeadContent, HighLevel, NormalLevel, LowLevel, TiketDetailsView, ContainerHighLevel } from "./Styles";
import Avatar from '../../images/photo.png';
import { Bell, DotsThreeVertical, MagnifyingGlass } from 'phosphor-react';
import { Table } from 'antd';
// import 'antd/dist/antd.less';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


//TODO: add navigasi ke halaman home and mentee
const columns = [
    {
        title: 'Tiket Details',
        dataIndex: 'tiketDetails',
        key: 'tiketDetails',
        render: (text, record) => {
            return (
                <TiketDetailsView>
                    <img src={record.tiketDetailsImages} />
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
                            <div>Hight</div> 
                            <DotsThreeVertical />
                        </HighLevel> 
            }else if (record.priority === 2) {
                return <NormalLevel>
                            <div>Normal</div>
                            <DotsThreeVertical />
                        </NormalLevel> 
            }else if (record.priority === 3) {
                return <LowLevel>
                            <div>Low</div>
                            <DotsThreeVertical />
                        </LowLevel> 
            }
        },
    },
];

const dataSource = [
    {
        key: '1',
        tiketDetailsImages: Avatar,
        tiketDetailsStatus: 'Contact Email not Linked',
        tiketDetailsUpdate: 'Update 1 day ago',
        customerName: 'Tom Cruise ',
        customerNameOn: 'on 24.05.2019',
        date: 'May 16, 2019',
        dateTime: '6.30 PM',
        priority: 1,
    },
    {
        key: '2',
        tiketDetailsImages: Avatar,
        tiketDetailsStatus: 'Contact Email not Linked',
        tiketDetailsUpdate: 'Update 1 day ago',
        customerName: 'Tom Cruise ',
        customerNameOn: 'on 24.05.2019',
        date: 'May 16, 2019',
        dateTime: '6.30 PM',
        priority: 2,
    },
    {
        key: '3',
        tiketDetailsImages: Avatar,
        tiketDetailsStatus: 'Contact Email not Linked',
        tiketDetailsUpdate: 'Update 1 day ago',
        customerName: 'Tom Cruise ',
        customerNameOn: 'on 24.05.2019',
        date: 'May 16, 2019',
        dateTime: '6.30 PM',
        priority: 3,
    },
];

const Mentors = () => {
    return (
        <Container>
            <HeadContent>
                <h1>Tickets</h1>
                <MagnifyingGlass />
                <Bell />
                <h2>Jones Ferdinand</h2>
                <img src={Avatar} alt='Avatar'></img>
            </HeadContent>
            <Content>
                <Table 
                    dataSource={dataSource} 
                    columns={columns}
                    title={() => 'All Tickets'} 
                />
            </Content>
        </Container>
    );
};

export default Mentors;
