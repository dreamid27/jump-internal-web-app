import { Popconfirm, Button } from 'antd';

const ModalDelete = (props) => {
    return (
        <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={props.confirmDelete}
            onCancel={props.cancelDelete}
            okText="Yes"
            cancelText="No"
            placement="topRight"
        >
            <Button type="primary" danger>
                Delete
            </Button>
        </Popconfirm>
    );
};

export default ModalDelete;