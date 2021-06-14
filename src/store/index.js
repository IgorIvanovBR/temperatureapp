import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import SearchCityReducer from './SearchCityReducer';
import thunk from "redux-thunk";

const store = createStore(SearchCityReducer,(applyMiddleware(thunk)))

export default store;

