import { Button, Card, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [form] = useForm();
  function onFinish(v) {
    console.log(v);
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-[500px] shadow-xl">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            initialValue={searchParams.get("email")}
            rules={[{ required: true }]}
          >
            <Input type="email"></Input>
          </Form.Item>
          <Form.Item
            label="Pin"
            name="pin"
            initialValue={searchParams.get("pin")}
            rules={[{ required: true }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password1"
            rules={[{ required: true }]}
          >
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="password2"
            rules={[{ required: true }]}
          >
            <Input.Password></Input.Password>
          </Form.Item>
          <div className="flex justify-center">
            <Form.Item>
              <Button htmlType="submit">Login</Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
