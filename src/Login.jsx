import { Button, Card, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import customAxios from "./useAxios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUserData } from "./store";

const Login = () => {
  const {setUser,user}=useUserData()
  console.log(user);
  const caxios = customAxios();
  const [form] = useForm();

  const mutateLogin=useMutation({
    mutationFn:async(data)=>{
      const result=caxios.post("/userlogin/",data)
      return result.data
    },
    onError: (res) => {
      let error = [];
      res.response.data.forEach((x) => {
        error.push({
          name: [x.key],
          errors: [x.msg],
        });
      });
      form.setFields(error);
    },
    onSuccess: (res) => {
      setUser(res)
      toast.success("Login success");
      form.resetFields();
    }
  })

  async function onFinish(v) {
    await mutateLogin.mutateAsync(v)
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
