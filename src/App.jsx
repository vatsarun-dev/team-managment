import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";
import { useState } from "react";
const App = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [card, setCard] = useState(() => {
    const save = localStorage.getItem("user");
    return save ? JSON.parse(save) : [];
  });
  const [edit, setEdit] = useState(null);

  let handleDelete = (id) => {
    let arr = card.filter((item) => item.id !== id);
    setCard(arr);
    localStorage.setItem("user", JSON.stringify(arr));
  };
  const searchValues = card.filter((m) =>
    (m.fname + "" + m.lname).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="min-h-screen bg-black flex flex-col gap-3">
      <Navbar setToggle={setToggle} setSearch={setSearch} />
      {toggle ? (
        <Form
          card={card}
          setCard={setCard}
          setToggle={setToggle}
          edit={edit}
          setEdit={setEdit}
        />
      ) : (
        <div className="px-3 sm:px-6">
          {card.length === 0 ? (
            <h1 className="text-white text-xl font-semibold py-4">
              There is no Team Mates yet
            </h1>
          ) : (
            <div className="flex flex-wrap justify-center sm:justify-start">
              {searchValues.map((data) => {
                return (
                  <Card
                    key={data.id}
                    arr={data}
                    handleDelete={handleDelete}
                    id={data.id}
                    setEdit={setEdit}
                    setToggle={setToggle}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
