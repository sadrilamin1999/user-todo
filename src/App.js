import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import { createContext, useEffect, useState } from "react";

export const DeleteHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const deleteData = async (id) => {
    await fetch(`https://oceanic-warm-dogsled.glitch.me/task/${id}`, {
      method: "DELETE",
      Headers: {
        "Content-Type": "Application/json",
      },
    });
  };
  return (
    <div className="wrapper min-h-screen bg-gradient-to-t from-gray-900 to-teal-900 text-xl text-gray-200 flex flex-col py-10">
      <DeleteHandlerContext.Provider value={handleDelete}>
        <Header />
        <Task tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} loading={loading} error={error} />
        <Footer />
      </DeleteHandlerContext.Provider>
    </div>
  );
};

export default App;
