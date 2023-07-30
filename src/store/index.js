import { createStore,combineReducers } from "redux";

import taskReducer from "../Reducers/rootReducer";

const rootReducer= combineReducers({
    tasks:taskReducer
});

const store =createStore(rootReducer);

export default store;