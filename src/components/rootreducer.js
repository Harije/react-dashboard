import { combineReducers } from "redux"
import DashboardReducer from "./reducers/dashboard"
import UserReducer from "./reducers/users"

const rootreducer = combineReducers({DashboardReducer,UserReducer})


export default rootreducer