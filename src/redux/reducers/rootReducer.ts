import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
    loader: loaderReducer,
    projects: projectsReducer,
});

export default rootReducer;