import React from "react";
import Container, { Content } from './styles';
import { Table } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeadContents from '../../components/HeadContent';
import columns from "./constants";
import useTickets from "../../hooks/useTickets";

//TODO: add navigasi ke halaman home and mentee

const Tickets = () => {
    const { tickets, isLoading } = useTickets();
    
    return (
        <Container>
            <HeadContents />
            <Content>
                <Table 
                    columns={columns}
                    dataSource={tickets}
                    title={() => 'All Tickets'}
                    loading={isLoading}
                />
            </Content>
        </Container>
    );
};

export default Tickets;
