import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose;

const composeEnhancers =
	process.env.NODE_ENV === "development" ? reduxDevTools : compose;

const middleware = [thunk];

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;
