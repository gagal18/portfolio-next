import React, { useState, useEffect } from "react";
import SocialIcon from "../Social/SocialIcon";
import AvatarHover from "/components/Avatar/AvatarHover";
import { BiMenu, BiX } from "react-icons/bi";

function Navbar(props) {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  useEffect(() => {
  }, [toggleNavbar]);

  return (
    <>
      <div className={"h-20 flex bg-black"}>
        <div className={"hidden lg:flex w-4/5 mx-auto justify-between"}>
          <div className={"flex items-center"}>
            <img className={"w-12"} src={"/assets/icon.png"} />
          </div>
          <div className={"flex"}>
            <SocialIcon icon={"Github"} />
            <SocialIcon icon={"Facebook"} />
            <SocialIcon icon={"LinkedIn"} />
          </div>
        </div>
        <div
          className={
            "flex lg:hidden w-4/5 mx-auto justify-between items-center"
          }
        >
          <div className={"flex items-center"}>
            <img className={"w-12"} src={"/assets/icon.png"} />
          </div>
          {!toggleNavbar ? (
            <div
              className={"text-4xl h-1/2"}
              onClick={() => setToggleNavbar(true)}
            >
              <BiMenu color={"#a5a5a5"} />
            </div>
          ) : (
            <div
              className={"text-4xl h-1/2"}
              onClick={() => setToggleNavbar(false)}
            >
              <BiX color={"#a5a5a5"} />
            </div>
          )}
        </div>
      </div>
      <div
        className={`bg-black py-10 custom-transition duration-300 absolute z-50 w-full ${
          !toggleNavbar
            ? "invisible opacity-0 max-h-0"
            : "visible opacity-100 max-h-96"
        }`}
      >
        {/* <div className={"flex justify-center"}>
          <ul>
            <li className={"text-slate-500"}>LINK</li>
            <li className={"text-slate-500"}>LINK</li>
            <li className={"text-slate-500"}>LINK</li>
            <li className={"text-slate-500"}>LINK</li>
          </ul>
        </div> */}
        <div className={"flex justify-center"}>
          <SocialIcon icon={"Github"} />
          <SocialIcon icon={"Facebook"} />
          <SocialIcon icon={"LinkedIn"} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
