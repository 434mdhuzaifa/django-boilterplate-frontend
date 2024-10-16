import { Button, Card, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import { useUserData } from "./store";
const Signup = () => {
  const {user,setUser}=useUserData()
  const [form] = useForm();
  function onFinish(v) {
    console.log(v);
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-[500px] shadow-xl">
        <Form form={form} onFinish={onFinish} layout="vertical">
        <div className="flex gap-2">
            <Form.Item className="flex-1" label="First Name" name="first_name">
              <Input></Input>
            </Form.Item>
            <Form.Item className="flex-1" label="Last Name" name="last_name">
              <Input></Input>
            </Form.Item>
          </div>
          <Form.Item label="Username" name="username" rules={[{required:true}]}>
            <Input></Input>
          </Form.Item>
          <Form.Item label="Password" name="password1" rules={[{required:true}]}>
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item label="Confirm Password" name="password2" rules={[{required:true}]}>
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item rules={[{required:true}]} label="Email" name="email">
            <Input type="email"></Input>
          </Form.Item>
          <div className="flex justify-center">
            <Form.Item>
              <Button htmlType="submit">Login</Button>
            </Form.Item>
          </div>
        </Form>
        <Link className="flex justify-center text-blue-400 font-semibold" to="/">Login</Link>
      </Card>
    </div>
  );
};

export default Signup;
