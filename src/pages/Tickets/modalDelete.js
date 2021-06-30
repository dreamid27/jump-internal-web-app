import { Popconfirm, Button } from 'antd';
import useTickets from '../../hooks/useTickets';

const ModalDelete = (props) => {
    const { confirmDelete, cancelDelete } = useTickets();
    console.log(props);
    return (
        <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
            okText="Yes"
            cancelText="No"
            placement="topRight"
        >
            <Button type="primary" danger>
                {props}
                Delete
            </Button>
        </Popconfirm>
    );
};

export default ModalDelete;