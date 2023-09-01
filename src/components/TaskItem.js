import { useContext } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { DeleteHandlerContext, EditHandlerContext } from "../App";

const TaskItem = ({ task, handleEditSubmitter, editedText, setEditedText }) => {
  const handleDelete = useContext(DeleteHandlerContext);
  const handleEdit = useContext(EditHandlerContext);

  return (
    <div className="task-item bg-gray-800 p-4 rounded flex justify-between hover:bg-green-700 duration-300">
      <div className="item-left flex gap-2">
        <sapn>
          <input type="checkbox" />
        </sapn>

        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmitter(e, task.id)}>
            <input
              className="bg-transparent outline-none border-b-2 pb-1 border-gray-500 focus:border-teal-500"
              type="text"
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}

        {!task.isEditable && <p>{task.text}</p>}

        {/* <p>{task.text}</p> */}
      </div>
      <div className="item-right flex gap-2">
        <button
          onClick={() => handleEdit(task.id)}
          className="hover:text-teal-300 duration-300 cursor-pointer"
        >
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
