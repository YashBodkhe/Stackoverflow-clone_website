import React from "react";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Homemainbar from "../../components/HomeMainbar/Homemainbar";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
import "../../App.css";

function Questions()
{
    return (
        <div className="home-container-1">
            <Leftsidebar/>
            <div className="home-container-2">
                <Homemainbar/>
                <Rightsidebar/>
            </div>
        </div>
    );
}

export default Questions;