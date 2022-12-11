import React from 'react';
import {ReactTerminal} from "react-terminal";
import TerminalChild from "/components/Terminal/TerminalChild";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";


function ModalTerminal(props) {
    const router = useRouter();
    const { theme, setTheme } = useTheme()
    const error = {
        color: "red",
        fontWeight: "bold"
    };

    const commands = {
        guideme: (input) => {
            if (!input) {
                return (
                    <span>
                        <TerminalChild lvl={1} text={"goto [route]"}/>
                        <TerminalChild lvl={2} text={"navigate to other pages"}/>
                        <TerminalChild lvl={1} text={"guideme -route"}/>
                        <TerminalChild lvl={2} text={"find info where you can navigate"}/>
                    </span>
                );
            }
            else if("-route"){
                return (
                    <span>
                        <TerminalChild lvl={1} text={"you can visit"}/>
                        <TerminalChild lvl={2} text={"/"}/>
                        <TerminalChild lvl={2} text={"/about"}/>
                    </span>
                );
            }
            return (
                <span style={error}>
                Can&apost help with <strong>{input}</strong>
                </span>
            );
        },
        goto: (input) => {
           if(!input){
               return (
                   <span>
                      <TerminalChild lvl={1} text={"please specify a route to go"}/>
                   </span>
               )
           }else{
               switch (input) {
                   case "home": {
                       router.push('/')
                       return (
                           <span>
                              <TerminalChild lvl={1} text={`going to /${input}`}/>
                           </span>
                       )
                   }break;
                   case "about": {
                       router.push('/about')
                       return (
                           <span>
                              <TerminalChild lvl={1} text={`going to /${input}`}/>
                           </span>
                       )
                   }break;
                   default:
                       return (
                           <span style={error}>
                            <TerminalChild lvl={1} text={`no route with /${input}`}/>
                            </span>
                       )
                       break;
               }
           }
         }

    };
    const welcomeMessage = (
        <span>
          Type <strong>guideme</strong> for command list
          <br/>
            <span style={{fontSize: "12px"}}>click on my glasses to go {theme == "light" ? "dark" : "light"}-mode</span>
          <br/>
        </span>
    );
    return (
        <div className={"hidden lg:block w-full h-60 lg:h-80"}>
            <ReactTerminal
                commands={commands}
                theme={'material-dark'}
                prompt="$"
                welcomeMessage={welcomeMessage}
            />
        </div>
    );
}

export default ModalTerminal;
