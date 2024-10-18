import { Button, Card, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import customAxios from "./useAxios";
import { useMutation } from "@tanstack/react-query";
import { useUserData } from "./store";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { setUser } = useUserData();
  const navigate = useNavigate();
  const caxios = customAxios();
  const [searchParams] = useSearchParams();
  const [form] = useForm();
  const mutationResetPass = useMutation({
    mutationFn: async (data) => {
      const result = await caxios.post("/reset-password-data/", data);
      return result.data;
    },
    onError: (res) => {
      if (res.response.data.detail) {
        toast.error(res.response.data.detail);
      } else {
        let error = [];
        res.response.data.forEach((x) => {
          error.push({
            name: [x.key],
            errors: [x.detail],
          });
        });
        form.setFields(error);
      }
    },
    onSuccess: (res) => {
      setUser(res.data);
      toast.success("Password Reseted");
      navigate("/");
    },
  });
  async function onFinish(v) {
    await mutationResetPass.mutateAsync(v);
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
            rules={[{ required: true },{min:6}]}
          >
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="password2"
            rules={[{ required: true },{min:6}]}
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
