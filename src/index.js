import React from "react";
import ReactDOM from "react-dom";
import Welder from "./welder.js";
import Admin from "./admin.js";
import Axios from "axios";
import How from "./howtouse.js";

function App() {


    const reset = () => {
        Axios.get("https://backcovid.herokuapp.com/reset")
        window.location.reload()
    }

    return (
        <div>
            <div><How /></div>
            <button onClick={reset}>Reset</button>
            <div style={{width: "95%", border: "solid green", padding: "20px"}}><Welder /></div>
            <div style={{width: "95%", border: "solid blue", padding: "20px"}}><Admin /></div>
            <div style={{width: "100%", height: "300px"}}></div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));