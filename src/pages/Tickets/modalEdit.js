import { Modal, Spin } from 'antd';
import FormEdit from './formEdit';

const ModalEdit = ( props ) => {
    return(
    <Modal
        title="Edit Tickets"
        visible={props.isModalEditVisible}
        onCancel ={props.handleCloseModal}
        footer={null}
    >
        {props.isLoading ? 
            <Spin tip="Loading..."/> :
            <FormEdit
            isLoading={props.isLoading}
            isModalEditVisible={props.isModalEditVisible}
            handleCloseModal={props.handleCloseModal}
            layoutFormAdd={props.layoutFormAdd}
            tailLayoutFormAdd={props.tailLayoutFormAdd}
            onResetFormAdd={props.onResetFormAdd}
            onFinishFormEdit={props.onFinishFormEdit}
            onFinishFailedFormAdd={props.onFinishFailedFormEdit}
            form={props.form}
            formData={props.formData}
            />
        }
    </Modal>
    );
};

export default ModalEdit;