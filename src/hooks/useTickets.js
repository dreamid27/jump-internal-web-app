/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, message } from 'antd';
import normalizerDataSource from '../normalizer/normalizerDataSource';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/tickets/';

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState(false);
    const [formData, setFromData] = useState({});
    const [form] = Form.useForm();

    const handleCloseModal = () => {
        setIsModalVisible(false);
        console.log('Hide Modal Add');
        form.resetFields();
        console.log('Clear Form');
        setIsModalEditVisible(false);
        console.log('Hide Modal Edit');
        form.resetFields();
        console.log('Clear Form');
    };

    const handleShowModal = () => {
        setIsModalVisible(true);
    };

    const handleShowModalEdit = (rec) => {
        setFromData(rec);
        setIsModalEditVisible(true);
    };

    const layoutFormAdd = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayoutFormAdd = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onResetFormAdd = () => {
        form.resetFields();
    };

    const onFinishFormAdd = (values) => {
        setIsLoading(true);
        postTicket(values);
        setTimeout(() => {
            setIsModalVisible(false);
            setIsLoading(false);
            form.resetFields();
        }, 1000);
    };

    const onFinishFailedFormAdd = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinishFormEdit = (idData, values) => {
        setIsLoading(true);
        editTickets(idData, values);
        setTimeout(() => {
            setIsModalEditVisible(false);
            setIsLoading(false);
            form.resetFields();
        }, 1000);
    };

    const onFinishFailedFormEdit = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Start Delete Function
    const confirmDelete = (props) => {
        deleteTicket(props);
        message.success('Delete Success');
    }

    const cancelDelete = (e) => {
        console.log(e);
        message.error('Delete Cancel');
    }
    // End Delete Funtion

    const deleteTicket = async (idData) => {
        try {
            setIsLoading(true);
            const resDel = await axios.delete(urlApi + idData);
            console.log(resDel);
            const resGet = await axios.get(urlApi);
            const dataSource = normalizerDataSource(resGet.data);
            setTickets(dataSource);
        } catch (err) {
            console.log(err.message);
        }
        finally {
            setIsLoading(false);
        }
    };

    const postTicket = async (data) => {
        try {
            setIsLoading(true);
            const resPost = await axios.post(urlApi, data);
            console.log(resPost);
            const resGet = await axios.get(urlApi);
            const dataSource = normalizerDataSource(resGet.data);
            setTickets(dataSource);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const editTickets = async (idData, data) => {
        try {
            setIsLoading(true);
            const resEdit = await axios.put(urlApi + idData, data);
            console.log(resEdit);
            const resGet = await axios.get(urlApi);
            const dataSource = normalizerDataSource(resGet.data);
            setTickets(dataSource);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(async () => {
        try {
            setIsLoading(true);
            const resGet = await axios.get(urlApi);
            const dataSource = normalizerDataSource(resGet.data);
            setTickets(dataSource);
        } catch (err) {
            console.log(err.message);
            console.log(err.status);
        } finally {
            setIsLoading(false);
        }
    }, [])

    return {
        tickets,
        isLoading,
        isModalVisible,
        isModalEditVisible,
        layoutFormAdd,
        tailLayoutFormAdd,
        form,
        formData,
        onResetFormAdd,
        onFinishFormAdd,
        onFinishFailedFormAdd,
        handleCloseModal,
        handleShowModal,
        deleteTicket,
        postTicket,
        editTickets,
        confirmDelete,
        cancelDelete,
        onFinishFormEdit,
        onFinishFailedFormEdit,
        handleShowModalEdit,
    };
};

export default useTickets;


