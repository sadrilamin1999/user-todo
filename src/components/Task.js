import { useRef, useState } from "react";

const Task = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  // input field Change Handler
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  // addTaskHandler
  const addTaskHandler = (e) => {
    e.preventDefault();
    // posting task
    taskPostion(task);
    // clear input field
    inputRef.current.blur();
    setTask("");
  };

  // task POST request
  const taskPostion = async (text) => {
    try {
      const res = await fetch("https://oceanic-warm-dogsled.glitch.me/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // "Application/json" should be "application/json"
        },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        throw new Error("Task post request failed");
      }

      const data = await res.json();
      // real-time data updation
      setTasks([...tasks, data]);
    } catch (error) {
      console.error("Error posting task:", error);
    }
  };

  return (
    <form
      className="form container mx-auto bg-gray-900 p-10 flex  justify-between"
      onSubmit={addTaskHandler}
    >
      <input
        required
        value={task}
        ref={inputRef}
        onChange={changeHandler}
        type="text"
        placeholder="What thinks to do?"
        className=" bg-transparent outline-none border-b-2 border-gray-500 px-4"
      />
      <button
        type="submit"
        className="bg-green-700 px-4 py-2 rounded-sm font-semibol tracking-wider hover:bg-green-600/60 text-gray-200/90"
      >
        Add Task
      </button>
    </form>
  );
};

export default Task;
