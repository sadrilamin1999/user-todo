import { RiTodoLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="Header container mx-auto bg-gray-900 p-10 flex justify-center rounded-tl-md rounded-tr-md border-b-2 border-gray-800">
      <h2 className="upercase tracking-widest flex gap-2 items-center text-3xl font-semibold">
        <span>
          <RiTodoLine />
        </span>
        <span>Todo App</span>
      </h2>
    </header>
  );
};

export default Header;
