import { useDispatch, useSelector } from "react-redux";
import { addHabit, markAsCompleted, markAsSkipped } from "../redux/habitSlice";
import { RootState } from "../store";
import { useState } from "react";

const HabitList = () => {
  const habits = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch();
  const [habitTitle, setHabitTitle] = useState<string>("");

  const handleNewHabit = () => {
    if (habitTitle.trim()) {
      const newHabit = {
        id: Date.now(),
        title: habitTitle,
        streak: 0,
        status: "not attempted",
      };
      dispatch(addHabit(newHabit));
      setHabitTitle("");
    }
  };

  return (
    <div>
      <h2>Habit Tracker</h2>
      <div>
        <h3>Enter The Habit You Want to Track</h3>
        <input
          type="text"
          value={habitTitle}
          onChange={(e) => setHabitTitle(e.target.value)}
          className="border"
        />
        <button onClick={handleNewHabit}>Add Habit</button>{" "}
      </div>
      {habits.length === 0 ? (
        <p>You Have No Habits to Track</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <div>
                <span>
                  {habit.title} - Status: {habit.status} - Streak:{" "}
                  {habit.streak}
                </span>
                <button onClick={() => dispatch(markAsCompleted(habit.id))}>
                  Mark As Completed
                </button>
                <button onClick={() => dispatch(markAsSkipped(habit.id))}>
                  Mark As Skipped
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
