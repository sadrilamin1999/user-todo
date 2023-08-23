import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);

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
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="wrapper min-h-screen bg-gradient-to-t from-gray-900 to-teal-900 text-xl text-gray-200 flex flex-col py-10">
      <Header />
      <Task tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
