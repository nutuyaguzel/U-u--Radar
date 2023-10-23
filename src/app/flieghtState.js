
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { options } from "./costants";
import axios from "axios";




export const getFlightData=createAsyncThunk(
    'flights/getFlights',
    async()=>{
    //asenkron işlemler 
 const res = await axios.request(options)
    
    // bize gelen dizileri alıp objeye çevirdik
    const newData = 
    res.data.aircraft.map((plane) => ({
        id: plane[0],
        code: plane[1],
        lat: plane[2],
        lng: plane[3],
      }));

 
 
console.log(res.data.aircraft)
    //store a aktarmak istediğimiz veriyi return et
return newData;

})



 const  initialState={
    flights:[],
    flightsLoading:true,
    isError:false,
}


 export const flightSlice=createSlice({
    name:"flightSlice",
    initialState,
    extraReducers:{
        //pending:apiden cevap beklerken
[getFlightData.pending]:(state,action)=>{
    state.flightLoading=true
},
//fullfilled : eger veri gelirse  
[getFlightData.fulfilled]:(state,action)=>{
  state.flights=action.payload;
  state.flightsLoading=false;
},
// rejected : api cevap vermezse
[getFlightData.rejected]: (state, action) => {
    state.flightsLoading = false;
    state.isError = true;
  },

    }

 })

 //eğer thunk kullanacaksak reducer değil extraReducers kullanılır 