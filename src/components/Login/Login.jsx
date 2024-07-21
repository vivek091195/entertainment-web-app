import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/Movie.svg";
import { FormFields } from "../../constants/FormFields";
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
} from "./Login.style";

const Login = ({
  modalTitle,
  formFields,
  btnText,
  btnSubText,
  secondaryBtnText,
}) => {
  const { fields, onFieldChangeHandler, onSubmitClickHandler } = useLogin();
  const _renderFormFields = (formFields = {}) => {
    return Object.keys(formFields).map((field) => {
      const { id, title, validator, errorText } = formFields[field];
      return (
        <FormField
          type="text"
          key={id}
          name={id}
          placeholder={title}
          value={fields[id]}
          onChange={(event) => onFieldChangeHandler(id, event)}
        />
      );
    });
  };

  return (
    <LoginPageContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <LoginModal>
        <LoginTitle>Login</LoginTitle>
        <FormWrapper>{_renderFormFields(FormFields.LOGIN)}</FormWrapper>
        <SubmitButton onClick={onSubmitClickHandler}>
          Login to your account
        </SubmitButton>
        <AdditionalInfoContainer>
          <InfoText>Don't have an account?</InfoText>
          <LoginButton>Sign Up</LoginButton>
        </AdditionalInfoContainer>
      </LoginModal>
    </LoginPageContainer>
  );
};

Login.propTypes = {
  modalTitle: PropTypes.string,
  formFields: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
  btnSubText: PropTypes.string,
  secondaryBtnText: PropTypes.string,
};

Login.defaultProps = {
  modalTitle: "",
  btnSubText: "",
  secondaryBtnText: "",
};

export { Login };
