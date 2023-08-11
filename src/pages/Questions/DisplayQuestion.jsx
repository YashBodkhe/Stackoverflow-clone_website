import React from "react";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
import QuestionsDetails from "./QuestionsDetails";

function DisplayQuestion()
{
    return(
        <div className="home-container-1">
            <Leftsidebar/>
            <div className="home-container-2">
                <QuestionsDetails/>
                <Rightsidebar/>
            </div>
        </div>
    )
}

export default DisplayQuestion;