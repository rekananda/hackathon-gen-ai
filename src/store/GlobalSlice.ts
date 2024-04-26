import { UserDataT } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface State {
  Superior: UserDataT[];
  user?: UserDataT|null;
  Peer: UserDataT[];
}

type PayloadDataT<T> = {
  saveToLocalStorage?: boolean;
  data: T;
}

const initialState: State = {
  user: null ,
  Superior: [
    {
      name: "Freddy",
      position: "CTO",
      jobDesc: "CTO",
      company: "Talentlytica",
      relation: "bad"
    }
  ],
  Peer: [
    {
      name: "Natasha",
      position: "Designer",
      jobDesc: "Designer",
      company: "Talentlytica",
      relation: "great"
    },
    {
      name: "Rafael",
      position: "Designer",
      jobDesc: "Designer",
      company: "Talentlytica",
      relation: "neutral"
    },
  ]
};

const globalSlice: any = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUserData: (state: State, action: PayloadAction<PayloadDataT<UserDataT>>) => {
      if (action.payload.saveToLocalStorage) {
        localStorage.setItem("UserInfo", JSON.stringify(action.payload.data));
      }
      state.user = action.payload.data;
    },
  },
});

export const {
  setUserData,
} = globalSlice.actions;

export default globalSlice.reducer;
