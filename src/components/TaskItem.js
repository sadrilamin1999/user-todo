import { FiEdit, FiTrash } from "react-icons/fi";

const TaskItem = () => {
  return (
    <div
      className="task-item bg-gray-800 p-4 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800
    flex justify-between"
    >
      <div className="item-left flex gap-2">
        <sapn>
          <input type="checkbox" />
        </sapn>
        <sapn>
          <p>My todo</p>
        </sapn>
      </div>
      <div className="item-right flex gap-2">
        <span className="hover:text-teal-500">
          <FiEdit />
        </span>
        <span className="hover:text-rose-500">
          <FiTrash />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
