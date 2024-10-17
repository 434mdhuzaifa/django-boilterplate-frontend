import { Form, Input } from "antd";
import { useUserData } from "./store";
import { useForm } from "antd/es/form/Form";

const UpdateUser = () => {
    const {user}=useUserData()
    const [form]=useForm()
    function onFinish(v) {
        console.log(v);
    }
    return (
        <div>
            <Form
            layout="vertical"
            onFinish={onFinish}
            form={form}
            >
                <div className="flex gap-2">
                <Form.Item
                name="first_name"
                label="First Name"
                className="flex-1"
                initialValue={user?.first_name}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                className="flex-1"
                name="last_name"
                label="Last Name"
                initialValue={user?.last_name}
                >
                    <Input></Input>
                </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default UpdateUser;