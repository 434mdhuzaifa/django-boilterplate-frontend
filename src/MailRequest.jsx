import { Button, Form, Input } from "antd";

const MailRequest = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] gap-3">
        <Form 
        layout="vertical"
        className="w-[500px]"
        >
            <Form.Item
            label="Email"
            name="email"
            rules={[{required:true}]}
            >
            <Input type="email"></Input>
            </Form.Item>
            <Button htmlType="submit">submit</Button>
        </Form>
    </div>
  );
};

export default MailRequest;
