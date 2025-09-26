import { Suspense, useState } from "react";

import "./app.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const App = () => {
  const playersPromise = fetchPlayers();

  const [toggle, setToggle] = useState(true);
  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-center my-4">
            Available Players
          </h1>
          <div className="">
            <button
              className={`border border-r-0 py-3 px-4 rounded-l-xl  font-semibold${
                toggle === true ? " bg-[#E7FE29] text-black " : "text-whate"
              }`}
              onClick={() => setToggle(true)}
            >
              Available
            </button>
            <button
              className={`border border-l-0 py-3 px-4 rounded-r-xl font-semibold ${
                toggle === false ? " bg-[#E7FE29] text-black" : "text-white"
              } `}
              onClick={() => setToggle(false)}
            >
              <span>Selected</span>
              <span className="ml-1">(0)</span>
            </button>
          </div>
        </div>
      </div>

      {/* main content */}
      <main className="max-w-[1200px] mx-auto pt-6">
        {toggle === true ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <AvailablePlayers
              playersPromise={playersPromise}
            ></AvailablePlayers>
          </Suspense>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </main>
    </>
  );
};

export default App;
