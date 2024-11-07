// Exporting the interface that represents each Individual Habit
export interface Habit {
  id: number;
  title: string;
  streak: number;
  history: DailyStatus[];
  status: "completed" | "skipped" | "not attempted";
}

//Exporting the interface that represents the status of each Habits
export interface DailyStatus {
  createdAt: Date;
}
