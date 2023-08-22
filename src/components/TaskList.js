import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <div className="task-list bg-gray-900 container mx-auto p-10 flex flex-col gap-3">
      <TaskItem />
    </div>
  );
};

export default TaskList;
