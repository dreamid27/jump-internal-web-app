import React from "react";
import Container, { Content } from './styles';
import { Table } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeadContents from '../../components/HeadContent';
import useTickets from '../../hooks/getTickets';
import columns from "./constants";

//TODO: add navigasi ke halaman home and mentee

const Tickets = () => {
    
    useTickets();
    return (
        <Container>
            <HeadContents />
            <Content>
                <Table 
                    columns={columns}
                    // dataSource={dataSource} 
                    title={() => 'All Tickets'}
                />
            </Content>
        </Container>
    );
};

export default Tickets;
