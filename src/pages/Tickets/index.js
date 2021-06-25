import React, { useState } from "react";
import Container, { Content } from './styles';
import { Button, Table, Modal } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeadContents from '../../components/HeadContent';
import columns from "./constants";
import useTickets from "../../hooks/useTickets";
import FormAdd from "./formAdd";
// import modalAdd from "./modalAdd";

//TODO: add navigasi ke halaman Tickets

const Tickets = () => {
    const { tickets, isLoading } = useTickets();
    const [isModalVisible, setIsModalVisible] = useState(false);

    // console.log(modalAdd(true));

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <Container>
            <HeadContents />
            <Content>
                <Button type="primary" onClick={showModal}>
                    Add Tickets
                </Button>
                <Table
                    columns={columns}
                    dataSource={tickets}
                    title={() => 'All Tickets'}
                    loading={isLoading}
                />
            </Content>
            <Modal
                title="Add Tickets"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <FormAdd />
            </Modal>
        </Container>
    );
};

export default Tickets;
