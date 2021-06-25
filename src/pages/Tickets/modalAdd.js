import { Modal } from 'antd';
import { useState } from 'react';
import FormAdd from './formAdd';

const ModalAdd = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <Modal
        title="Add Tickets"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
    >
        <FormAdd />
    </Modal>
    );
};

export default ModalAdd;