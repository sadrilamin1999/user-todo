import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list bg-gray-900 container mx-auto p-10 flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
