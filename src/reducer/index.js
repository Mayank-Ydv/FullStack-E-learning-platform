import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slice/authSlice"
import cartReducer from "../slice/cartSlice"
import profileReducer from "../slice/profileSlice"
import courseReducer from "../slice/courseSlice"
import viewCourseReducer from "../slice/viewCourseSlice"


const rootReducer = combineReducers({
    auth : authReducer,
    profile:profileReducer,
    cart : cartReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer

})

export default rootReducer