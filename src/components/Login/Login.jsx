import React from "react";
import { MODE_ENUM } from "../../constants/FormFields";
import { useLogin } from "./useLogin";

import {
  LoginPageContainer,
  FormField,
  LoginModal,
  LoginTitle,
  LogoWrapper,
  FormWrapper,
  SubmitButton,
  AdditionalInfoContainer,
  InfoText,
  LoginButton,
  FieldError,
  ErrorText,
  BrandLogo,
  ErrorIcon,
} from "./Login.style";

const Login = () => {
  const {
    mode,
    fields,
    formData,
    setMode,
    onFieldBlurHandler,
    onFieldChangeHandler,
    onSubmitClickHandler,
  } = useLogin();
  const _renderFormFields = (formFields = {}) => {
    return Object.keys(formFields).map((field) => {
      const { id, type, title, showError, errorText } = formFields[field];
      return (
        <>
          <FormField
            type={type}
            key={id}
            name={id}
            placeholder={title}
            value={fields[id]}
            onBlur={(event) => onFieldBlurHandler(id, event)}
            onChange={(event) => onFieldChangeHandler(id, event)}
          />
          {showError ? (
            <FieldError>
              <ErrorIcon />
              <ErrorText>{errorText}</ErrorText>
            </FieldError>
          ) : null}
        </>
      );
    });
  };

  const isLoginMode = mode === MODE_ENUM.LOGIN;
  return (
    <LoginPageContainer>
      <LogoWrapper>
        <BrandLogo />
      </LogoWrapper>
      <LoginModal>
        <LoginTitle>{isLoginMode ? "Login" : "Sign Up"}</LoginTitle>
        <FormWrapper>{_renderFormFields(formData)}</FormWrapper>
        <SubmitButton type="submit" onClick={onSubmitClickHandler}>
          {isLoginMode ? "Login to your account" : "Create an account"}
        </SubmitButton>
        <AdditionalInfoContainer>
          <InfoText>
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}
          </InfoText>
          <LoginButton
            onClick={() =>
              setMode(
                mode === MODE_ENUM.LOGIN ? MODE_ENUM.SIGN_UP : MODE_ENUM.LOGIN
              )
            }
          >
            {isLoginMode ? "Sign Up" : "Login"}
          </LoginButton>
        </AdditionalInfoContainer>
      </LoginModal>
    </LoginPageContainer>
  );
};

export { Login };
