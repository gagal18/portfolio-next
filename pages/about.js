import ModalTerminal from "/components/Terminal/ModalTerminal";
import CircleItem from "/components/CircleCarousel/CircleItem";
import CircleCarousel from "../components/CircleCarousel/CircleCarousel";
import {useEffect, useState} from "react";
import AvatarHover from "../components/Avatar/AvatarHover";

export default function About() {
    return (
        <>
            <div className={"mx-auto w-4/5"}>
                <div className={"absolute bottom-0 lg:bottom-unset w-4/5 lg:w-1/3 flex flex-col justify-center items-center"}>
                    <ModalTerminal />
                    <AvatarHover />
                </div>
                <CircleCarousel>
                    <CircleItem icon={"React"} />
                    <CircleItem icon={"JavaScript"} />
                    <CircleItem icon={"Redux"} />
                    <CircleItem icon={"Next"} />
                    <CircleItem icon={"WordPress"} />
                    <CircleItem icon={"Gatsby"} />
                </CircleCarousel>
            </div>
        </>

    )
}
