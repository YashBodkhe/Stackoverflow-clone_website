import React from "react";
import './rightsidebar.css';


function Widgettag()
{
    const tags = ['c','c++','java','python','machine learning','express','react','node','mongoDB']

    return (
        <div className="widjet-tags">
            <h4>Watched tags</h4>
            <div className="widget-tags-div">
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
    
}

export default Widgettag;