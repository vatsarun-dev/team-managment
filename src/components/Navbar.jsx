import React from "react";

const Navbar = ({ setToggle, setSearch }) => {
  return (
    <div className="bg-[#30302e] w-full flex flex-col gap-3 py-3 px-3 sm:px-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="text-white text-lg sm:text-base">TeamMembers</h1>
        <button
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="text-white px-3 py-2 border rounded-xl w-full sm:w-auto"
        >
          + Add Members
        </button>
      </div>
      <div className="w-full ">
        <input
          className="text-white w-full py-2 px-4 border border-white/30 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
          type="text"
          placeholder="search by name, skills, role"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
