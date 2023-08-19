import React from "react";

const Task = () => {
  return (
    <form className="form container mx-auto bg-gray-900 p-10 flex  justify-between">
      <input
        type="text"
        placeholder="What thinks to do?"
        className=" bg-transparent outline-none border-b-2 border-gray-500 px-4"
      />
      <button className="bg-green-600/80 px-4 py-2 rounded-sm font-semibol hover:bg-green-600/60 text-gray-200/90">
        Add Task
      </button>
    </form>
  );
};

export default Task;
