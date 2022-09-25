import Head from 'next/head'
import Navbar from "../components/Layout/Navbar";
import ModalTerminal from "../components/Terminal/ModalTerminal";
import AvatarHover from "../components/Avatar/AvatarHover";
export default function Home() {


    return (
        <div className={"mx-auto w-4/5"}>

            <div className={"absolute bottom-0 w-1/3 flex flex-col justify-center items-center"}>
                <ModalTerminal />
            </div>
        </div>
    )
}
