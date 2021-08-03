import { Input, Form, DatePicker, Select, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;

const FormEdit = (props) => {
    console.log(props.formData);

    return (
        <Form
            {...props.layoutFormAdd}
            name="formEdit"
            initialValues={{
                avatar: props.formData.tiketDetailsImages,
                notes: props.formData.tiketDetailsStatus,
                name: props.formData.customerName,
                createdAt: moment(props.formData.originalCreatedAt),
                date: moment(props.formData.originalDate),
                priority: props.formData.priority,
            }}
            form={props.form}
            onFinish={(values) => props.onFinishFormEdit(props.formData.key, values)}
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

export default FormEdit;