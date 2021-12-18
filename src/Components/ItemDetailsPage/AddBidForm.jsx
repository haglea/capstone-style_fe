import { Button, Form } from "react-bootstrap";
import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddBidForm.css";

const AddBidForm = (props) => {
  const { handleSubmit, submitting, pristine } = props;
  return (
    <>
      <Form className="my-3" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <Field
            name="bid"
            component="input"
            className="form-control w-25"
            placeholder="Place your bid"
            id="bid-input"
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-secondary"
            type="submit"
            className="my-3"
            disabled={submitting || pristine}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default reduxForm({
  form: "addBidForm",
})(AddBidForm);
