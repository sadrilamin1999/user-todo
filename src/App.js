import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

export const DeleteHandlerContext = createContext();
export const EditHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editedText, setEditedText] = useState("");
  const [toggleEditMode, setToggleEditMode] = useState(true);

  useEffect(() => {
    //geting tasks from server
    getingTasksHandler();
  }, []);

  // geting tasks
  const getingTasksHandler = async () => {
    try {
      const res = await fetch("https://oceanic-warm-dogsled.glitch.me/task");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  //delete handler
  const handleDelete = (id) => {
    //delete data
    deleteData(id);

    //set updated task
    setTasks(tasks.filter((task) => id !== task.id));
  };
  // DELETE request
  const deleteData = async (id) => {
    await fetch(`https://oceanic-warm-dogsled.glitch.me/task/${id}`, {
      method: "DELETE",
      Headers: {
        "Content-Type": "Application/json",
      },
    });
  };

  // Edit handler
  const handleEdit = (id) => {
    const [editableTarget] = tasks.filter((task) => id === task.id);
    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);

    setTasks([...tasks]);
    setToggleEditMode(false);

    // re-arrange
    tasks
      .filter((task) => task.id !== id)
      .map((targetedEl) => (targetedEl.isEditable = false));
  };

  // Editing task form handler
  const handleEditSubmitter = (e, id) => {
    e.preventDefault();

    setToggleEditMode(toggleEditMode);

    // persist data
    const editPersistance = {
      text: editedText,
      id: id,
    };

    // put request
    puttingRequest(id, editPersistance);

    // real time update
    const [editableTarget] = tasks.filter((task) => id === task.id);
    editableTarget.isEditable = false;
    editableTarget.text = editPersistance.text;

    setTasks([...tasks]);
  };

  const puttingRequest = async (id, newData) => {
    fetch(`https://oceanic-warm-dogsled.glitch.me/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  };
  return (
    <div className="wrapper min-h-screen bg-gradient-to-t from-gray-900 to-teal-900 text-xl text-gray-200 flex flex-col py-10">
      <DeleteHandlerContext.Provider value={handleDelete}>
        <EditHandlerContext.Provider value={handleEdit}>
          <Header />
          <Task tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            loading={loading}
            error={error}
            handleEditSubmitter={handleEditSubmitter}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </EditHandlerContext.Provider>
      </DeleteHandlerContext.Provider>
    </div>
  );
};

export default App;
