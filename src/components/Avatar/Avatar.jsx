import React from "react";

function Avatar({children ,backgroundColor, px ,py, color, borderRadius, fontSize, textAlign, cursor,textDecoration})
{

    const avatar_style = {
        backgroundColor,
        padding:`${py} ${py}`,
        color : color || 'black',    // if color not mentioned while calling Avatar, then default black
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor : cursor || null,
        textDecoration : ""
    }

    return <div style={avatar_style}>
                {children}
           </div>
}

export default Avatar;