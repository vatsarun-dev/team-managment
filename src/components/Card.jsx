import React from "react";

const Card = ({ arr, handleDelete, id, setEdit, setToggle }) => {
  return (
    <div className="p-2 sm:p-4 w-full sm:w-auto">
      <div className="min-h-[300px] w-full sm:w-[250px] bg-[#484844] border border-[#484844] flex flex-col gap-2 rounded">
        <div className="p-2 flex justify-center">
          <img
            className="w-[120px] sm:w-[50%]"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt=""
          />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-lg text-white font-semibold">
              {arr.fname}
            </span>
            <span className="text-lg text-white font-semibold">
              {arr.lname}
            </span>
          </div>
          <h1 className="text-sm text-white">{arr.role}</h1>
          <h1 className="text-xs text-[#7295bf]">{arr.mail}</h1>
          <h1 className="text-xs text-white">{arr.skills}</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-around gap-2 p-2">
          <button
            onClick={() => {
              setEdit(arr);
              setToggle((prev) => !prev);
            }}
            className="w-full  py-3 border border-white text-white rounded text-sm font-semibold"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="w-full px-4 py-3 border border-white text-white rounded text-sm font-semibold"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
