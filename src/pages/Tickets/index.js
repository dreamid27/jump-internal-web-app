import React from "react";
import Container, { Content } from './styles';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeadContents from '../../components/HeadContent';
import columns from "./constants";
import useTickets from "../../hooks/useTickets";
import ModalAdd from "./modalAdd";

//TODO: add navigasi ke halaman Tickets

const Tickets = () => {
    const { tickets, 
            isLoading, 
            isModalVisible, 
            layoutFormAdd, 
            tailLayoutFormAdd, 
            form, 
            onResetFormAdd,
            onFinishFormAdd,
            onFinishFailedFormAdd,
            handleCloseModal, 
            handleShowModal, 
          } = useTickets();

    return (
        <Container>
            <HeadContents />
            <Content>
                <Button type="primary" onClick={handleShowModal}>
                    Add Tickets
                </Button>
                <Table
                    columns={columns}
                    dataSource={tickets}
                    title={() => 'All Tickets'}
                    loading={isLoading}
                />
            </Content>
            <ModalAdd 
                isLoading={isLoading}
                isModalVisible={isModalVisible}
                handleCloseModal={handleCloseModal}
                layoutFormAdd={layoutFormAdd}
                tailLayoutFormAdd={tailLayoutFormAdd}
                onResetFormAdd={onResetFormAdd}
                onFinishFormAdd={onFinishFormAdd}
                onFinishFailedFormAdd={onFinishFailedFormAdd}
                form={form}
            />
        </Container>
    );
};

export default Tickets;
