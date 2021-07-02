import { Modal, Spin } from 'antd';
import FormEdit from './formEdit';

const ModalEdit = ( props ) => {
    return(
    <Modal
        title="Edit Tickets"
        visible={props.isModalVisible}
        onCancel ={props.handleCloseModal}
        footer={null}
    >
        {props.isLoading ? 
            <Spin tip="Loading..."/> :
            <FormEdit
            isLoading={props.isLoading}
            isModalVisible={props.isModalVisible}
            handleCloseModal={props.handleCloseModal}
            layoutFormAdd={props.layoutFormAdd}
            tailLayoutFormAdd={props.tailLayoutFormAdd}
            onResetFormAdd={props.onResetFormAdd}
            onFinishFormAdd={props.onFinishFormEdit}
            onFinishFailedFormAdd={props.onFinishFailedFormEdit}
            idData={props.idData}
            form={props.form}
            />
        }
    </Modal>
    );
};

export default ModalEdit;