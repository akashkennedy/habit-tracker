import { createSlice } from "@reduxjs/toolkit";
import { Habit } from "../types/habitTypes";

const initialState: Habit[] = [];

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.push(action.payload);
    },
    markAsCompleted: (state, action: PayloadAction<number>) => {
      const habit = state.find((habit) => habit.id === action.payload);
      if (habit) {
        habit.status = "completed";
      }
    },
    markAsSkipped: (state, action: PayloadAction<number>) => {
      const habit = state.find((habit) => habit.id === action.payload);
      if (habit) {
        habit.status = "skipped";
      }
    },
  },
});

export const { addHabit, markAsCompleted, markAsSkipped } = habitSlice.actions;
export default habitSlice.reducer;
