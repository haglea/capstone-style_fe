import { Button, Form } from "react-bootstrap";
import "./AddCommentForm.css";
import React from "react";
import { Field, reduxForm } from "redux-form";

const AddCommentForm = (props) => {
  const { handleSubmit, submitting, pristine } = props;
  return (
    <>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <div>
          <Field
            name="comment"
            component="textarea"
            className="form-control"
            placeholder="Add a comment"
            rows="2"
            id="comment-input"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-secondary"
            type="submit"
            className="my-3"
            disabled={submitting || pristine}
          >
            Send
          </Button>
        </div>
      </Form>
    </>
  );
};

export default reduxForm({
  form: "addCommentForm",
})(AddCommentForm);
