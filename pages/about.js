import ModalTerminal from "/components/Terminal/ModalTerminal";
export default function About() {
    return (
        <div className={"mx-auto w-4/5"}>
            <div className={"absolute bottom-0 w-1/3 flex flex-col justify-center items-center"}>
                <ModalTerminal />
            </div>
        </div>
    )
}
