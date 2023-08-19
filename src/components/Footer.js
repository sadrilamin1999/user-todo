import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto text-center bg-gray-900 p-10 border-t-2 border-gray-800">
      <p className="text-sm">&copy; {new Date().getFullYear()} Todo App</p>
    </footer>
  );
};

export default Footer;
