import React from "react";
import Form from "./form.js"
import "./index.css"
import Axios from "axios";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Welder() {

    const Any = () => {
        Axios.get("https://backcovid.herokuapp.com/negative").then((response)=>{
            if (response.statusText==="OK") {
                alert("data sent");
            }
        })
    }

    const Update = () => {
        Axios.get("https://backcovid.herokuapp.com/positive").then((response)=>{
            if (response.statusText==="OK") {
                alert("data sent");
            }
        })
    }

    return (
        <Router>
            <div >
                <div>Hi Erick, do you have any symptoms today?</div>
                <br />
                <button onClick={Any}> I dont have any</button>                 
                <Link to="/symptoms"><button>I have some</button></Link>   
                <button onClick={Update}>Send</button>                  
       
    <Switch>
      <Route path="/" exact component={House} />
      <Route path="/symptoms" component={Symptoms} />
    </Switch>
   
            </div>
        </Router>
    )
}

const House = () => (
    <div></div>
    );

const Symptoms = () => (
    <Form />   
);

export default Welder;