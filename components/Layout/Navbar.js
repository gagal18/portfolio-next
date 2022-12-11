import React, { useState, useEffect } from "react";
import SocialIcon from "../Social/SocialIcon";
import { BiMenu, BiX } from "react-icons/bi";
import {useRouter} from "next/router";
import Link from "next/link";

function Navbar(props) {
  const router = useRouter();

  const [toggleNavbar, setToggleNavbar] = useState(false);
  useEffect(() => {
  }, [toggleNavbar]);

  return (
    <>
      <div className={"bg-black h-20 flex"}>
        <div className={"hidden lg:flex w-4/5 mx-auto justify-between"}>
          <div className={"flex items-center"}>
            <Link href="/">
            <img className={"w-12"} src={"/assets/icon.png"} />
            </Link>
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
          <Link href="/">
            <div className={"flex items-center"}>
              <img className={"w-12"} src={"/assets/icon.png"} />
            </div>
          </Link>
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
        className={`py-10 bg-black custom-transition duration-300 absolute z-50 w-full ${
          !toggleNavbar
            ? "invisible opacity-0 max-h-0"
            : "visible opacity-100 max-h-96"
        }`}
      >
        <div className={"flex justify-center"}>
          <ul>
            <Link href="/about"><li className={"text-slate-500"}>about</li></Link>
          </ul>
        </div>
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
