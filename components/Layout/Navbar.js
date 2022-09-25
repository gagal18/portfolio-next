import React from 'react';
import SocialIcon from "/components/Social/SocialIcon";

function Navbar(props) {
    return (
        <navbar className={'bg-black h-20 flex'}>
            <div className={"w-4/5 mx-auto flex justify-end"}>
                <SocialIcon icon={"Github"}/>
                <SocialIcon icon={"Facebook"}/>
                <SocialIcon icon={"LinkedIn"}/>
            </div>
        </navbar>
    );
}

export default Navbar;
