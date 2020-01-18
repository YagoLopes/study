import { combineReducers } from "redux"; /*COMBINA TODOS OS REDUCERS EM UM GRANDE REDUCER */
import { favorites } from "./favorites";
export default combineReducers({ favorites });
