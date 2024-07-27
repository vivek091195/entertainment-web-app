import { useEffect, useState } from "react";
import { FIELDS_ENUM, FormFields, MODE_ENUM } from "../../constants/FormFields";
import { Routes } from "../../routes";
import { apiInstance } from "../../config/axiosInstance";

const useLogin = () => {
  const [mode, setMode] = useState(MODE_ENUM.LOGIN);
  const [formData, setFormData] = useState(FormFields[mode]);
  const [fields, setFields] = useState({
    [FIELDS_ENUM.EMAIL]: "",
    [FIELDS_ENUM.PASSWORD]: "",
    [FIELDS_ENUM.REPEAT_PASSWORD]: "",
  });
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const onFieldBlurHandler = (key, { target }) => {
    if (!formData[key]) return;
    const validator = formData[key].validator;
    const typedValue = target.value;
    const isValid = validator.test(typedValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: {
        ...prevFormData[key],
        showError: !isValid,
        errorText:
          typedValue === ""
            ? prevFormData[key].emptyError
            : prevFormData[key].invalidError,
      },
    }));
    return isValid;
  };

  const onFieldChangeHandler = (key, { target }) => {
    setFields((prevFields) => ({
      ...prevFields,
      [key]: target.value,
    }));
  };

  const onSubmitClickHandler = () => {
    const isValid = Object.keys(fields)
      .map((field) =>
        onFieldBlurHandler(field, {
          target: {
            value: fields[field],
          },
        })
      )
      .filter((el) => el === false);
    if (isValid.length > 0) return;
    mode === MODE_ENUM.LOGIN ? submitLoginDetails() : submitRegisterDetails();
  };

  const submitLoginDetails = async () => {
    try {
      const reqBody = {
        [FIELDS_ENUM.EMAIL]: fields[FIELDS_ENUM.EMAIL],
        [FIELDS_ENUM.PASSWORD]: fields[FIELDS_ENUM.PASSWORD],
      };
      const response = await apiInstance.post(Routes.login, reqBody);
    } catch (error) {
      setLoginErrorMessage(error?.response?.data?.error);
      console.error("Error fetching data:", error);
    }
  };

  const submitRegisterDetails = async () => {
    try {
      const reqBody = {
        [FIELDS_ENUM.EMAIL]: fields[FIELDS_ENUM.EMAIL],
        [FIELDS_ENUM.PASSWORD]: fields[FIELDS_ENUM.PASSWORD],
      };
      const response = await apiInstance.post(Routes.register, reqBody);
    } catch (error) {
      setLoginErrorMessage(error?.response?.data?.error);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setLoginErrorMessage("");
    setFormData(FormFields[mode]);
  }, [mode]);

  return {
    mode,
    fields,
    formData,
    setMode,
    loginErrorMessage,
    onFieldBlurHandler,
    onFieldChangeHandler,
    onSubmitClickHandler,
  };
};

export { useLogin };
