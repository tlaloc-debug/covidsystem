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
            <div style={{width: "100%", border: "solid green"}}><Welder /></div>
            <div style={{width: "100%", border: "solid blue"}}><Admin /></div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));