import React from "react";
import Container, { Content } from './styles';
import { Table } from 'antd';
import {columns, dataSource} from './constants';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeadContents from '../../components/HeadContent';

//TODO: add navigasi ke halaman home and mentee

const Mentors = () => {
    return (
        <Container>
            <HeadContents />
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
