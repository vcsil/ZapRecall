import React from "react";
import '../assets/styles/reset.css';
import '../assets/styles/style.css';
import Initial from "./Initial/Initial.js";
import Cards from "./Cards/Cards.js";


export default function App() {

    const [init, setInit] = React.useState(false);


    return (
        <>
            {/* {
                !init ? 
                <Initial setInit={setInit} /> 
                : 
                <Cards />
            } */}

            <Cards />
        </>
    )
}