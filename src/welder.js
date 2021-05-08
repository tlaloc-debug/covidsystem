import React from "react";
import Form from "./form.js"
import "./index.css"
import Axios from "axios";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Welder() {

    const Any = () => {
        Axios.get("https://backcovid.herokuapp.com/negative")
    }

    const Update = () => {
        Axios.get("https://backcovid.herokuapp.com/positive")
    }

    return (
        <Router>
            <div>
                <div>Hi Erick, do you have any symptoms today?</div>
            
                <button onClick={Any}> I dont have any</button>                 
                <Link to="/sales"><button>I have some</button></Link>   
                <button onClick={Update}>Send</button>                    
       
    <Switch>
      <Route path="/" exact component={House} />
      <Route path="/sales" component={Sales} />
    </Switch>
   
            </div>
        </Router>
    )
}

const House = () => (
    <div></div>
    );

const Sales = () => (
    <Form />   
);

export default Welder;