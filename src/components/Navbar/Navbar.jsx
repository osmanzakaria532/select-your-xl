import doller_icon from "../../../src/assets/dollar-icon.png";
import navImg from "../../../src/assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-base-100 shadow-sm">
          <div className="max-w-[1200px] mx-auto navbar justify-between ">
            <div className="flex">
              <a
                className="cursor-pointer "
                href="/"
              >
                <img
                  src={navImg}
                  alt=""
                />
              </a>
            </div>
            <div className="border border-[#ffffff] rounded-lg py-2 px-5">
              {/* <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>{" "}
              </svg>
            </button> */}
              <div className="flex items-center gap-2">
                <span>0</span>
                <span>Coin</span>
                <img
                  src={doller_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
