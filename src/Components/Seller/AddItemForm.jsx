import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddItemForm.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FieldFileInput from "./FieldFileInput";

const required = (value) => (value ? undefined : "Required");
const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength6 = minLength(6);

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>  
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderTextArea = ({ input, meta: { touched, error } }) => (
  <div>  
    <div>
      <textarea
        {...input}
        placeholder="Provide a description that best describes the item you are selling"
        rows="10"
        cols="40"
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
}) => (
  <div>
    <div>
      <select {...input}>{children}</select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const AddItemForm = (props) => {
  const { error, handleSubmit, submitting } = props;

  return (
    <>
      <Form id="item-form" onSubmit={handleSubmit}>
        <h3 className="mb-5">
          <strong>Add an item that you want to sell</strong>
        </h3>
        <div className="my-2">
          <Field
            name="item_name"
            component={renderField}
            type="text"
            label="Item name"
            validate={[required, minLength6]}
          />
        </div>

        <div className="my-2">
          <Field
            name="price"
            component={renderField}
            type="text"
            label="Price"
            validate={[required]}
          />
        </div>

        <div className="my-2">
          <div className="my-2">
            <Field
              name="category"
              type="select"
              component={renderSelectField}
              validate={[required]}
            >
              <option value="">Select a category</option>
              <option value="Accessories">Accessories</option>
              <option value="Clothes">Clothes</option>
              <option value="Shoes">Shoes</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Other">Other</option>
            </Field>
          </div>
        </div>

        <div className="my-2">
          <Field
            name="description"
            type="text"
            component={renderTextArea}
            validate={[required]}
          />
        </div>

        <div className="my-2">
          <Field
            name="image"
            component={FieldFileInput}
            validate={[required]}
          />
        </div>

        {error && <strong>{error}</strong>}

        <button
          className="btn btn-outline-dark my-2 mr-3"
          type="submit"
          disabled={submitting}
        >
          Add Item
        </button>

        <button className="btn btn-outline-dark my-2" type="button">
          <Link to="/home">Cancel</Link>
        </button>
      </Form>
    </>
  );
};

export default reduxForm({
  form: "addItemForm",
})(AddItemForm);
