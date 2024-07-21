import { useState } from "react";

const useLogin = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    repeat_password: "",
  });

  const onFieldChangeHandler = (key, { target }) => {
    setFields((prevFields) => ({
      ...prevFields,
      [key]: target.value,
    }));
  };

  const onSubmitClickHandler = () => {
    console.log(fields);
  };

  return {
    fields,
    onFieldChangeHandler,
    onSubmitClickHandler,
  };
};

export { useLogin };
