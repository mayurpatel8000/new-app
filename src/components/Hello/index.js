import React from "react";

const Hello = () => {
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

export default Hello;

export const Menu = () => {
    const submenu = () => {
        return (
            <div>submenu</div>
        )
    };
    const a = () => 
        <div>saddasd</div>
    

    return (
        <div>
            <p>Menudd</p>
            {a}
        </div>
    )
}