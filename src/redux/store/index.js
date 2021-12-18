import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import likesReducer from "../reducers/likesReducer";
import itemsReducer from "../reducers/itemsReducer";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import commentsReducer from "../reducers/commentsReducer";
import usersReducer from "../reducers/usersReducer";
import bidReducer from "../reducers/bidReducer";
import { reducer as reduxFormReducer } from "redux-form";

export const initialState = {
  likes: {
    elements: [],
  },
  items: {
    items: [],
  },
  auth: {
    user: {
      first_name: "",
      last_name: "",
      email: "",
      image: "",
      accessToken: null,
    },
    isLoggedIn: false,
  },
  cart: {
    elements: [],
  },
  comments: {
    comments: [],
  },
  users: [],
  bids: {
    elements: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  likes: likesReducer,
  items: itemsReducer,
  auth: authReducer,
  cart: cartReducer,
  comments: commentsReducer,
  users: usersReducer,
  bids: bidReducer,
  form: reduxFormReducer.plugin({
    addCommentForm: (state, action) => {
      if (action.type === "@@redux-form/SET_SUBMIT_SUCCEEDED") {
        const newState = { ...state };
        delete newState.values.comment;
        return newState;
      }
      return state;
    },
    addBidForm: (state, action) => {
      if (action.type === "@@redux-form/SET_SUBMIT_SUCCEEDED") {
        const newState = { ...state };
        delete newState.values.bid;
        return newState;
      }
      return state;
    },
    addItemForm: (state, action) => {
      if (action.type === "@@redux-form/SET_SUBMIT_SUCCEEDED") {
        const newState = { ...state };
        delete newState.values;
        return newState;
      }
      return state;
    },
  }),
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
