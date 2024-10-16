import { Button, Card, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const [form] = useForm();
  function onFinish(v) {
    console.log(v);
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-96 shadow-xl">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Username" name="username" rules={[{required:true}]}>
            <Input></Input>
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{required:true}]}>
            <Input.Password></Input.Password>
          </Form.Item>
          <div className="flex justify-center">
            <Form.Item>
              <Button htmlType="submit">Login</Button>
            </Form.Item>
          </div>
        </Form>
        <div className="flex justify-between">
        <Link className="flex justify-center text-blue-400 font-semibold" to="/signup">SignUp</Link>
        <Link className="flex justify-center text-blue-400 font-semibold" to="/mailrequest">Forget Password</Link>
        </div>
        
      </Card>
    </div>
  );
};

export default Login;
