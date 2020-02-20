import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import searchReducer from "./reducer";


const rootReducer = combineReducers({
    movies: searchReducer
});

const store = createStore(rootReducer,applyMiddleware (thunkMiddleWare));

export default store;