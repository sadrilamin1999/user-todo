import { useContext } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { DeleteHandlerContext } from "../App";

const TaskItem = ({ task }) => {
  const handleDelete = useContext(DeleteHandlerContext);

  return (
    <div className="task-item bg-gray-800 p-4 rounded flex justify-between hover:bg-green-700 duration-300">
      <div className="item-left flex gap-2">
        <sapn>
          <input type="checkbox" />
        </sapn>
        <sapn>
          <p>{task.text}</p>
        </sapn>
      </div>
      <div className="item-right flex gap-2">
        <button className="hover:text-teal-300 duration-300 cursor-pointer">
          <FiEdit />
        </button>
        <button
          onClick={() => handleDelete(task.id)}
          className="hover:text-rose-600 duration-300 cursor-pointer"
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
