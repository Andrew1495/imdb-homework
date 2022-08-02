import React from "react";


const Film = ({name, children}) => {
    return(
        <>
        <li>  <a href={children} target="_blank">{name}</a>
        </li>
        </>




    )
};


export default Film;