import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardList: [],
  dashboardCardSize: [],
  dashboardCardPosition: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardList: (state, action) => {
      state.dashboardList = action.payload;
    },
    setDashboardCardSize: (state, action) => {
      const previousDBCards = JSON.parse(
        JSON.stringify(state.dashboardCardSize)
      );
      console.log('====================================');
      console.log(previousDBCards);
      console.log('====================================');
      const updatedCards = previousDBCards.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            width: action.payload.width,
            height: action.payload.height,
          };
        }
        return card;
      });
      console.log('>>>>>>', updatedCards)
       state.dashboardCardSize = [updatedCards.length ? updatedCards : action.payload];
    },
    setDashboardCardPosition: (state, action) => {
      state.dashboardCardPosition = action.payload;
    },
  },
});

export const {
  setDashboardList,
  setDashboardCardSize,
  setDashboardCardPosition,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
