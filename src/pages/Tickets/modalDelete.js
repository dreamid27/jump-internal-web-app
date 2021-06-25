import { Popconfirm, message, Button } from 'antd';
import UseDeleteTicket from '../../hooks/useDeleteTickets';

const ModalDelete = (idData) => {

    const confirm = (e) => {
        console.log(e);
        message.success('Delete Success');
        UseDeleteTicket(idData);
        console.log(UseDeleteTicket(idData));
    }

    const cancel = (e) => {
        console.log(e);
        message.error('Delete Cancel');
    }

    return (
        <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            placement="topRight"
        >
            <Button type="primary" danger>
                {idData}
                Delete
            </Button>
        </Popconfirm>
    );
};

export default ModalDelete;