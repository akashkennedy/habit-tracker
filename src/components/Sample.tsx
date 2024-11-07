import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../redux/habitSlice";
import { RootState } from "../store";
import { Habit } from "../types/habitTypes";

const Sample: React.FC = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state: RootState) => state.habits);

  useEffect(() => {
    // Create a new habit
    const newHabit: Habit = {
      id: 1,
      title: "Drink Water",
      streak: 0,
      history: [],
    };

    // Dispatch the action to add the habit
    dispatch(addHabit(newHabit));
  }, [dispatch]);

  // Log the habits state to the console
  useEffect(() => {
    console.log("Current habits state:", habits);
  }, [habits]);

  return <div>Habit Added! Check the console for the updated state.</div>;
};

export default Sample;
