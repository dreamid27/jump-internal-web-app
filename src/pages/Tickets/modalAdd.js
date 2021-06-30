import { Modal } from 'antd';
import FormAdd from './formAdd';

const ModalAdd = ( props ) => {

    return(
    <Modal
        title="Add Tickets"
        visible={props.isModalVisible}
        onCancel ={props.handleCloseModal}
        footer={null}
    >
        <FormAdd
            isLoading={props.isLoading}
            layoutFormAdd={props.layoutFormAdd}
            tailLayoutFormAdd={props.tailLayoutFormAdd}
            onResetFormAdd={props.onResetFormAdd}
            onFinishFormAdd={props.onFinishFormAdd}
            onFinishFailedFormAdd={props.onFinishFailedFormAdd}
            form={props.form}
        />
    </Modal>
    );
};

export default ModalAdd;