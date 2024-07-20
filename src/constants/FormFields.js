export const FormFields = {
  LOGIN: {
    email: {
      id: "email",
      title: "Email address",
      validator: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorText: "Please enter a valid email address",
    },
    password: {
      id: "password",
      title: "Password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      errorText:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
  },
  SIGN_UP: {
    email: {
      id: "email",
      title: "Email address",
      validator: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorText: "Please enter a valid email address",
    },
    password: {
      id: "password",
      title: "Password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      errorText:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
    repeat_password: {
      id: "repeat_password",
      title: "Repeat password",
      validator:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      errorText: "Passwords do not match.",
    },
  },
};
