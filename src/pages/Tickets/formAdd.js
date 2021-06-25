import { Input, Form, DatePicker, Select, Button } from 'antd';
import { useFormik } from 'formik';
import UsePostTicket from '../../hooks/usePostTickets';

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Option } = Select;

const FormAdd = () => {
    const [form] = Form.useForm();

    const formik = useFormik({
        initialValues: {
            avatar: '',
            notes: '',
            name: '',
            createdAt: '',
            date: '',
            priority: '',
        },
    });

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = (values) => {
        UsePostTicket(values);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="formAdd"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                onChange={formik.handleChange}
                value={formik.values.name}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Image"
                name="avatar"
                rules={[
                    {
                        required: true,
                        message: 'Please input your image!',
                    },
                ]}
                onChange={formik.handleChange}
                value={formik.values.avatar}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="createdAt"
                label="Date"
                rules={[
                    {
                        type: 'object',
                        required: true,
                        message: 'Please select time!',
                    },
                ]}
                onChange={formik.handleChange}
                value={formik.values.createdAt}
            >
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item
                name="date"
                label="Date"
                rules={[
                    {
                        type: 'object',
                        required: true,
                        message: 'Please select time!',
                    },
                ]}
                onChange={formik.handleChange}
                value={formik.values.date}
            >
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item
                name="priority"
                label="Priority"
                rules={[
                    {
                        required: true,
                    },
                ]}
                onChange={formik.handleChange}
                value={formik.values.priority}
            >
                <Select
                    placeholder="Select Priority"
                    allowClear
                >
                    <Option value='1'>High</Option>
                    <Option value='2'>Normal</Option>
                    <Option value='3'>Low</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Ticket Notes"
                name="notes"
                rules={[
                    {
                        required: true,
                        message: 'Please input your ticket notes!',
                    },
                ]}
                onChange={formik.handleChange}
                value={formik.values.notes}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button 
                    type="primary" 
                    htmlType="submit"
                >
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormAdd;