import { message } from "antd";

const ErrorHandler = (err) => {
  message.error({
    content: err,
  });
};

export default ErrorHandler;
