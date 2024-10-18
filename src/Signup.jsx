import { Button, Card, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import customAxios from "./useAxios";
import toast from "react-hot-toast";
import { useUserData } from "./store";
const Signup = () => {
  const { user,setUser } = useUserData();
  const caxios = customAxios();
  const mutateSignUp = useMutation({
    mutationFn: async (data) => {
      let result = null
      if (user == null) {
        result = await caxios.post("/user/", data);
      } else {
        result = await caxios.put(`/user/${user?.id}/`, data);
      }
      if (result) {
        return result.data;
      }
      return result
    },
    onError: (res) => {
      if (res.response?.data) {
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
      } else {
        toast.error(res.message);
      }
    },
    onSuccess: (res) => {
      if (user!=null) {
        setUser(res)
      toast.success("User information updated")
      }else{
        toast.success(res.detail);
        form.resetFields()
      }
    },
  });
  const [form] = useForm();
  async function onFinish(v) {
    await mutateSignUp.mutateAsync(v);
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-[500px] shadow-xl">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <div className="flex gap-2">
            <Form.Item
              className="flex-1"
              label="First Name"
              name="first_name"
              initialValue={user?.first_name}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              className="flex-1"
              label="Last Name"
              name="last_name"
              initialValue={user?.last_name}
            >
              <Input></Input>
            </Form.Item>
          </div>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }, { min: 4 }]}
            initialValue={user?.username}
          >
            <Input></Input>
          </Form.Item>
          {user == null && (
            <>
              {" "}
              <Form.Item
                label="Password"
                name="password1"
                rules={[{ required: true }, { min: 6 }]}
              >
                <Input.Password></Input.Password>
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="password2"
                rules={[{ required: true }, { min: 6 }]}
              >
                <Input.Password></Input.Password>
              </Form.Item>
            </>
          )}

          <Form.Item
            rules={[{ required: true }, { min: 3 }]}
            label="Email"
            name="email"
            initialValue={user?.email}
          >
            <Input type="email"></Input>
          </Form.Item>
          <div className="flex justify-center">
            <Form.Item>
              <Button htmlType="submit" loading={mutateSignUp.isPending}>
                {user == null ? "Create User" : "Update User"}
              </Button>
            </Form.Item>
          </div>
        </Form>
        <Link
          className="flex justify-center text-blue-400 font-semibold"
          to="/"
        >
          Login
        </Link>
      </Card>
    </div>
  );
};

export default Signup;
