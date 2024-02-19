import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


//tüm statelerin toplandığı yer
const rootReducer = combineReducers({
    cart: cartReducer,
})

export default rootReducer