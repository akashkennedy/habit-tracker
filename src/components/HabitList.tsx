import { useDispatch, useSelector } from "react-redux";
import { markAsCompleted, markAsSkipped } from "../redux/habitSlice";
import { RootState } from "../store";

const HabitList = () => {
  const habits = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Habit Tracker</h2>
      {habits.length === 0 ? (
        <p>You Have No Habits to Track</p>
      ) : (
        habits.map((habit) => (
          <li key={habit.id}>
            <div>
              <span>
                {habit.title} - Status: {habit.status}
              </span>
              <button onClick={() => dispatch(markAsCompleted(habit.id))}>
                Mark As Completed
              </button>
              <button onClick={() => dispatch(markAsSkipped(habit.id))}>
                Mark As Skipped
              </button>
            </div>
          </li>
        ))
      )}
    </div>
  );
};

export default HabitList;
