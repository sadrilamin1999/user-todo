import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
const App = () => {
  return (
    <div className="wrapper min-h-screen bg-gradient-to-t from-gray-900 to-teal-900 text-xl text-gray-200 flex flex-col py-10">
      <Header />
      <Task />
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;
