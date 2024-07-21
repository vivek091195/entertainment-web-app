export const MODE_ENUM = {
  LOGIN: "login",
  SIGN_UP: "sign_up",
};
Object.freeze(MODE_ENUM);

export const FormFields = {
  [MODE_ENUM.LOGIN]: {
    email: {
      id: "email",
      type: "email",
      title: "Email address",
      validator: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      showError: false,
      errorText: "Please enter a valid email address",
    },
    password: {
      id: "password",
      type: "password",
      title: "Password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      showError: false,
      errorText:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
  },
  [MODE_ENUM.SIGN_UP]: {
    email: {
      id: "email",
      type: "email",
      title: "Email address",
      validator: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      showError: false,
      errorText: "Please enter a valid email address",
    },
    password: {
      id: "password",
      type: "password",
      title: "Password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      showError: false,
      errorText:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
    repeat_password: {
      id: "repeat_password",
      type: "password",
      title: "Repeat password",
      showError: false,
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      errorText: "Passwords do not match.",
    },
  },
};
