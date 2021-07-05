import { Input, Form, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

const FormAdd = (props) => {

    return (
        <Form
            {...props.layoutFormAdd}
            name="formAdd"
            initialValues={{
                avatar: '',
                notes: '',
                name: '',
                createdAt: '',
                date: '',
                priority: '',
            }}
            form={props.form}
            onFinish={props.onFinishFormAdd}
            onFinishFailed={props.onFinishFailedFormAdd}
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
                // onChange={formik.handleChange}
                // value={formik.values.name}
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
                // onChange={formik.handleChange}
                // value={formik.values.avatar}
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
                // onChange={formik.handleChange}
                // value={formik.values.createdAt}
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
                // onChange={formik.handleChange}
                // value={formik.values.date}
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
                // onChange={formik.handleChange}
                // value={formik.values.priority}
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
                // onChange={formik.handleChange}
                // value={formik.values.notes}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item {...props.tailLayoutFormAdd}>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Submit
                </Button>
                <Button htmlType="button" onClick={props.onResetFormAdd}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormAdd;