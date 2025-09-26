import { use } from "react";

import flagImg from "../../../src/assets/report-1.png";
import userImg from "../../../src/assets/user-1.png";

const AvailablePlayers = ({ playersPromise }) => {
  const plyayersData = use(playersPromise);
  console.log(plyayersData.battingStyle);

  return (
    <>
      {/* <h2 className="">Available Players</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {plyayersData.map((player) => (
          <div
            key={player.id}
            className="card bg-base-100 w-96 shadow-sm px-4"
          >
            <figure className="">
              <img
                src={player.playerImg}
                alt="Shoes"
                className="h-[300px] w-full object-cover"
              />
            </figure>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <img
                  src={userImg}
                  alt=""
                  className="w-[25px] rounded-full"
                />
                <h2 className="card-title">{player.playerName}</h2>
              </div>
              <div className="flex justify-between items-center my-4">
                <div className="flex items-center gap-2">
                  <img
                    src={flagImg}
                    alt=""
                  />
                  <span>{player.playerCountry}</span>
                </div>
                <button className="btn">{player.playerRole}</button>
              </div>
              <div className="border-1 border-gray-400 mb-4"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Rating</span>
                <span>{player.playerRating}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Left-Hand-Bat</span>
                <span>{player.battingStyle}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">
                  Price: {player.playerPrice}
                </span>
                <button className="btn">Chose Player</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AvailablePlayers;
