import { useEffect, useState } from "react";
import { FormFields, MODE_ENUM } from "../../constants/FormFields";

const useLogin = () => {
  const [mode, setMode] = useState(MODE_ENUM.LOGIN);
  const [formData, setFormData] = useState(FormFields[mode]);
  const [fields, setFields] = useState({
    email: "",
    password: "",
    repeat_password: "",
  });

  const onFieldBlurHandler = (key, { target }) => {
    const validator = formData[key].validator;
    const typedValue = target.value;
    const isValid = validator.test(typedValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: {
        ...prevFormData[key],
        showError: !isValid,
        errorText:
          typedValue === "" ? "Can't be empty" : prevFormData[key].errorText,
      },
    }));
  };

  const onFieldChangeHandler = (key, { target }) => {
    setFields((prevFields) => ({
      ...prevFields,
      [key]: target.value,
    }));
  };

  const onSubmitClickHandler = () => {
    console.log(fields);
  };

  useEffect(() => {
    setFormData(FormFields[mode]);
  }, [mode]);

  return {
    mode,
    fields,
    formData,
    setMode,
    onFieldBlurHandler,
    onFieldChangeHandler,
    onSubmitClickHandler,
  };
};

export { useLogin };
