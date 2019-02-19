import { createStore } from "redux";
import metricReducer from "./metricReducer";

const store = createStore(metricReducer);

export default store;
