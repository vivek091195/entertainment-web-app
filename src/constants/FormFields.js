export const MODE_ENUM = {
  LOGIN: "login",
  SIGN_UP: "sign_up",
};
Object.freeze(MODE_ENUM);

export const FIELDS_ENUM = {
  EMAIL: "email",
  PASSWORD: "password",
  REPEAT_PASSWORD: "repeat_password",
};
Object.freeze(FIELDS_ENUM);

export const FormFields = {
  [MODE_ENUM.LOGIN]: {
    [FIELDS_ENUM.EMAIL]: {
      id: "email",
      type: "email",
      title: "Email address",
      validator: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      showError: false,
      emptyError: "Can't be empty",
      invalidError: "Please enter a valid email address",
      errorText: "Please enter a valid email address",
    },
    [FIELDS_ENUM.PASSWORD]: {
      id: "password",
      type: "password",
      title: "Password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      showError: false,
      emptyError: "Can't be empty",
      invalidError:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      errorText:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
  },
  [MODE_ENUM.SIGN_UP]: {
    [FIELDS_ENUM.EMAIL]: {
      id: "email",
      type: "email",
      title: "Email address",
      validator: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      showError: false,
      emptyError: "Can't be empty",
      invalidError: "Please enter a valid email address",
      errorText: "Please enter a valid email address",
    },
    [FIELDS_ENUM.PASSWORD]: {
      id: "password",
      type: "password",
      title: "Password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      showError: false,
      emptyError: "Can't be empty",
      invalidError:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      errorText:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
    [FIELDS_ENUM.REPEAT_PASSWORD]: {
      id: "repeat_password",
      type: "password",
      title: "Repeat password",
      showError: false,
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      emptyError: "Can't be empty",
      invalidError: "Please enter the same password again",
      errorText: "Passwords do not match.",
    },
  },
};
