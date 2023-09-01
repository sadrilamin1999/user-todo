import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  loading,
  error,
  handleEditSubmitter,
  editedText,
  setEditedText,
}) => {
  return (
    <div className="task-list bg-gray-900 container mx-auto p-10 flex flex-col gap-3">
      {loading ? (
        <p>{error ? error : "Loading..."}</p>
      ) : (
        tasks.length === 0 && <p>No Task added.</p>
      )}

      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleEditSubmitter={handleEditSubmitter}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </div>
  );
};

export default TaskList;
