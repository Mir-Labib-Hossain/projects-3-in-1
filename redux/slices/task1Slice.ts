import { IAppointment } from "@/@types/all-types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  appointmentList: IAppointment[];
}

const initialState: IInitialState = {
  appointmentList: [],
};

const task1Slice = createSlice({
  name: "task1",
  initialState,
  reducers: {
    saveAppointmentList: (state, { payload }: { payload: IAppointment }) => {
      state.appointmentList = [...state.appointmentList, payload];
    },
    clearAppointmentList: (state) => {
      state.appointmentList = [];
    },
  },
});

export const { saveAppointmentList,clearAppointmentList } = task1Slice.actions;
export default task1Slice.reducer;
