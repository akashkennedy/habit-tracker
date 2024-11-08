import { createSlice } from "@reduxjs/toolkit";
import { Habit } from "../types/habitTypes";

const initialState: Habit[] = [];

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      const newHabit = { ...action.payload, streak: 0 };
      state.push(newHabit);
    },
    markAsCompleted: (state, action: PayloadAction<number>) => {
      const habit = state.find((habit) => habit.id === action.payload);
      if (habit) {
        habit.status = "completed";
        habit.streak += 1;
        if (habit.status !== "completed") {
          habit.streak += 1;
          habit.staus = "completed";
        }
      }
    },
    markAsSkipped: (state, action: PayloadAction<number>) => {
      const habit = state.find((habit) => habit.id === action.payload);
      if (habit) {
        habit.status = "skipped";
        habit.streak = 0;
      }
    },
  },
});

export const { addHabit, markAsCompleted, markAsSkipped } = habitSlice.actions;
export default habitSlice.reducer;
