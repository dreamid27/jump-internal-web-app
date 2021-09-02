import { Modal, Spin } from 'antd';
import FormAdd from './formAdd';
// import { Form} from 'antd';

const ModalAdd = ( props ) => {
    // const [form] = Form.useForm();
    console.log('form', props.form);
    return(
    <Modal
        title="Add Tickets"
        visible={props.isModalVisible}
        onCancel ={props.handleCloseModal}
        footer={null}
    >

        {props.isLoading ? 
            <Spin tip="Loading..."/> :
            <FormAdd
                isLoading={props.isLoading}
                layoutFormAdd={props.layoutFormAdd}
                tailLayoutFormAdd={props.tailLayoutFormAdd}
                onResetFormAdd={props.onResetFormAdd}
                onFinishFormAdd={props.onFinishFormAdd}
                onFinishFailedFormAdd={props.onFinishFailedFormAdd}
                form={props.form}
            />
        }
    </Modal>
    );
};

export default ModalAdd;