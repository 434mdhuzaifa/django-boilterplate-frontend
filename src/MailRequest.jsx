import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import customAxios from "./useAxios";
import toast from "react-hot-toast";

const MailRequest = () => {
  const caxios = customAxios();
  const [form] = useForm();
  const mutationMailRequest = useMutation({
    mutationFn: async (data) => {
      const result = await caxios.post("/reset-password-otp/", data);
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
    onSuccess: () => {
      toast.custom((t) => (
        <div className="flex justify-center border w-96 rounded-md p-2 shadow-md">
          <p className="text-lg text-center">
            If you have an account on this mail you will get the pin code in the
            mail.{" "}
            <span className="font-semibold text-red-500">
              please check the spam box too
            </span>
            .
          </p>
          <button
            className="px-3 border-l ml-3 hover:cursor-pointer"
            onClick={() => toast.dismiss(t.id)}
          >
            ❌
          </button>
        </div>
      ),{
        duration:Infinity
      });
      form.resetFields();
    },
  });
  async function onFinish(v) {
    await mutationMailRequest.mutateAsync(v);
  }
  
  return (
    <div className="flex justify-center items-center h-[90vh] gap-3">
      <Form
        layout="vertical"
        className="w-[500px]"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true }, { min: 3 }]}
        >
          <Input type="email"></Input>
        </Form.Item>
        <Button htmlType="submit" loading={mutationMailRequest.isPending}>
          submit
          
        </Button>
      </Form>
    </div>
  );
};

export default MailRequest;
