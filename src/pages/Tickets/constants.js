/* eslint-disable eqeqeq */
import { CustomerNameView, DateView, HighLevel, NormalLevel, LowLevel, TiketDetailsView } from "./styles";
import ModalDelete from "./modalDelete";
import { Button } from 'antd';

const columns = (confirmDelete,
    cancelDelete,
    handleShowModalEdit,
) => [
        {
            title: 'Tiket Details',
            dataIndex: 'tiketDetails',
            key: 'tiketDetails',
            render: (text, record) => {
                return (
                    <TiketDetailsView>
                        <img src={record.tiketDetailsImages} alt='AvatarUser' />
                        <div>
                            <h1> {record.tiketDetailsStatus} </h1>
                            <h2> Upadate {record.tiketDetailsUpdate} ago </h2>
                        </div>
                    </TiketDetailsView>
                );
            },
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            render: (text, record) => {
                return (
                    <CustomerNameView>
                        <h1>
                            {record.customerName}
                        </h1>
                        <h2>
                            on {record.customerNameOn}
                        </h2>
                    </CustomerNameView>
                );
            },
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text, record) => {
                return (
                    <DateView>
                        <h1>
                            {record.date}
                        </h1>
                        <h2>
                            {record.dateTime}
                        </h2>
                    </DateView>
                );
            },
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
            render: (text, record) => {
                if (record.priority == 1) {
                    return <HighLevel>
                        <div>HIGH</div>
                    </HighLevel>
                } else if (record.priority == 2) {
                    return <NormalLevel>
                        <div>NORMAL</div>
                    </NormalLevel>
                } else if (record.priority == 3) {
                    return <LowLevel>
                        <div>LOW</div>
                    </LowLevel>
                }
            },
            sorter: (a, b) => a.priority - b.priority,
            sorOrder: 1,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <ModalDelete
                        confirmDelete={() => confirmDelete(record.key)} //() => aktif saat ada action
                        cancelDelete={cancelDelete}
                    />
                    <Button type="primary" onClick={() => handleShowModalEdit(record)}>
                        Edit
                    </Button>
                </div>
            ),
        },
    ];

export default columns;