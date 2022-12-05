import React from "react";


function Header(props) {
    return (
        <header className="Header">
            <h1> {props.name}</h1>
        </header>
    );
}

export default Header;
