import React from 'react';

function TerminalChild({text, lvl}) {
    const indent1 = {marginLeft: 15, fontWeight: "bold"};
    const indent2 = {marginLeft: 30};
    const error = {
        color: "red",
        fontWeight: "bold"
    };
    return (
        <>
            {lvl === 1 ? <br/> : null }
            <span style={lvl === 1 ? indent1 : indent2 }>
                {text}
            </span>
            <br/>
        </>
    );
}

export default TerminalChild;
