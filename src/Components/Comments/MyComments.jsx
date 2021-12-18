import { ListGroup, Spinner } from "react-bootstrap";
import AddCommentForm from "./AddCommentForm";
import "./MyComments.css";
import { useEffect, useState } from "react";
import { getComments, addComment } from "../../redux/actions/commActions";
import { connect } from "react-redux";
import { parseISO, format, compareDesc } from "date-fns";

const MyComments = ({ auth, item, comments, getComments, addComment }) => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (values) => {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_DEV_URL}items/${item._id}/comments`;
    if (auth.user.userId) {
      await addComment(
        url,
        values.comment,
        auth.user.userId,
        auth.user.first_name
      );
    } else {
      const user = localStorage.getItem("user");
      const userId = JSON.parse(user)._Id;
      const first_name = JSON.parse(user).first_name;
      await addComment(url, values.comment, userId, first_name);
    }
    await getComments(url);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      let url = `${process.env.REACT_APP_DEV_URL}items/${item._id}/comments`;
      await getComments(url);
      setIsLoading(false);
    };
    fetchComments();
  }, [getComments, item]);

  return (
    <>
      <AddCommentForm onSubmit={(values) => submit(values)} />
      {isLoading && <Spinner animation="border" variant="success" />}
      <h5 className="d-flex">Comments</h5>
      <ListGroup className="mb-3">
        {comments ? (
          comments.comments
            .sort((a, b) =>
              compareDesc(parseISO(a.updatedAt), parseISO(b.updatedAt))
            )
            .map((comment) => (
              <ListGroup.Item key={comment._id}>
                {comment.comment}{" "}
                <span>
                  <small>
                    <b> - {comment.first_name} - </b>
                    {format(parseISO(comment.updatedAt), "PPpp")}
                  </small>
                </span>
              </ListGroup.Item>
            ))
        ) : (
          <h5 className="d-flex">No Comments</h5>
        )}
      </ListGroup>
    </>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  getComments: (item) => dispatch(getComments(item)),
  addComment: (url, comment, userId, first_name) =>
    dispatch(addComment(url, comment, userId, first_name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComments);
