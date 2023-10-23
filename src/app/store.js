

import { configureStore } from "@reduxjs/toolkit";
import { flightSlice } from "./flieghtState";



export default configureStore({reducer:flightSlice})