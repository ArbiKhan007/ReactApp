import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

function Faq() {
    const [display, setDisplay] = useState(false);

    function handleClick(e){
        setDisplay(prev => !prev);
    }

    const faqList = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: display ? "14vh" : "8vh",
        backgroundColor: "#393e46",
        listStyle: "none",
        color: "#fff",
        textAlign: "left",
        padding: "8px 4px",
        transitionDuration: "0.25s",
        transitionProperty: "all",
        transitionTimingFunction: "ease-out"
    }

    return (
        <div style={{}}>
            <div onClick={handleClick} style={faqList} name="firstQues">
                <div style={{padding: "0 1rem"}}>
                    <p>This is a Question ?</p>
                    <p style={{display: display ? "block" : "none", margin: 0}}>This is an answer</p>
                </div>
                <FontAwesomeIcon style={{padding: "1rem", cursor: "pointer"}} icon={faPlusSquare} />
            </div>
            <div onClick={handleClick} style={faqList} name="secQues">
                <div style={{padding: "0 1rem"}}>
                    <p>This is a Question ?</p>
                    <p style={{display: display ? "block" : "none", margin: 0}}>This is an answer</p>
                </div>
                <FontAwesomeIcon style={{padding: "1rem", cursor: "pointer"}} icon={faPlusSquare} />
            </div>
            <div onClick={handleClick} style={faqList} name="thirdQues">
                <div style={{padding: "0 1rem"}}>
                    <p>This is a Question ?</p>
                    <p style={{display: display ? "block" : "none", margin: 0}}>This is an answer</p>
                </div>
                <FontAwesomeIcon onClick={handleClick} style={{padding: "1rem", cursor: "pointer"}} icon={faPlusSquare} />
            </div>
        </div>
    )
}

export default Faq