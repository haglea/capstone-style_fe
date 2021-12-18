import React from "react";
import { Field, reduxForm } from "redux-form";
import "./LoginForm.css";

const required = (value) => (value ? undefined : "Required");
const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength6 = minLength(6);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Email address is in incorrect format"
    : undefined;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const LoginForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;

  return (
    <>
      <form id="login-form-modal" onSubmit={handleSubmit} className="w-80">
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Enter Email"
            validate={[required, email]}
          />
        </div>

        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
            validate={[required, minLength6]}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="forgotPassword">
            <a href="/">Forgot password?</a>
          </label>
        </div>

        <div>
          <Field
            name="staySignedIn"
            id="staySignedIn"
            component="input"
            type="checkbox"
          />{" "}
          <span htmlFor="staySignedIn">Stay signed in</span>
        </div>
        {error && <strong>{error}</strong>}
        <div>
          <button
            className="btn btn-outline-dark mb-1 mr-3"
            type="submit"
            disabled={submitting}
          >
            Log in
          </button>
          <button
            className="btn btn-outline-dark mb-1"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear values
          </button>
          <div>
            <label>
              Don't have an account? <a href="/">Sign up</a>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: "loginForm",
})(LoginForm);
