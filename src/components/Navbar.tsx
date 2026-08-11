import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-full mx-auto bg-white  py-2 px-3 shadow text-black">
      <div className="">
        <div className=" hidden lg:flex items-center justify-between">
          <p className="font-bold">PoultryWise</p>

          <div className=" hidden lg:flex gap-4">
            <a
              href="/#features"
              className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
            >
              Features
            </a>
            <a
              href="/#pricing"
              className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
            >
              How It works
            </a>
            <a
              href="/#testimony"
              className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4 "
            >
              Benefits
            </a>
          </div>

          <div className=" hidden lg:flex gap-4">
            <Button className=" border border-gray-300 shadow">Log In</Button>
            <Button className=" bg-green-800 ">Get Started</Button>
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        <div className=" text-black flex items-center justify-between lg:hidden w-full">
          <a href="/">
            <p className=" font-bold">PoultryWise</p>
          </a>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className=" lg:hidden mt-4 flex flex-col gap-2 items-start text-black bg-white">
            <a
              href="/#features"
              className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
            >
              Features
            </a>
            <a
              href="/#pricing"
              className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
            >
              How It works
            </a>
            <a
              href="/#testimony"
              className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4 "
            >
              Benefits
            </a>

            <Button className=" text-green-800 bg-white  border border-gray-300 shadow w-full">
              Log In
            </Button>
            <Button className=" bg-green-800 w-full text-white ">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
