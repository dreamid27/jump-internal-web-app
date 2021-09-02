import React from "react";
import Container, { Content } from './styles';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeadContents from '../../components/HeadContent';
import columns from "./constants";
import useTickets from "../../hooks/useTickets";
import ModalAdd from "./modalAdd";
import ModalEdit from "./modalEdit";

//TODO: add navigasi ke halaman Tickets

const Tickets = () => {
    const { tickets,
        isLoading,
        isModalVisible,
        isModalEditVisible,
        layoutFormAdd,
        tailLayoutFormAdd,
        form,
        formData,
        confirmDelete,
        cancelDelete,
        onResetFormAdd,
        onFinishFormAdd,
        onFinishFailedFormAdd,
        handleCloseModal,
        handleShowModal,
        onFinishFormEdit,
        onFinishFailedFormEdit,
        handleShowModalEdit,
    } = useTickets();

    console.log('isModalVisible', isModalVisible);
    console.log('isModalEditVisible', isModalEditVisible);
    

    return (
        <Container>
            <HeadContents />
            <Content>
                <Button type="primary" onClick={handleShowModal}>
                    Add Tickets
                </Button>
                <Table
                    columns={columns(
                        confirmDelete,
                        cancelDelete,
                        handleShowModalEdit,
                    )}
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
            <ModalEdit
                isLoading={isLoading}
                isModalEditVisible={isModalEditVisible}
                handleCloseModal={handleCloseModal}
                layoutFormAdd={layoutFormAdd}
                tailLayoutFormAdd={tailLayoutFormAdd}
                onResetFormAdd={onResetFormAdd}
                onFinishFormEdit={onFinishFormEdit}
                onFinishFailedFormAdd={onFinishFailedFormEdit}
                form={form}
                formData={formData}
            />
        </Container>
    );
};

export default Tickets;
