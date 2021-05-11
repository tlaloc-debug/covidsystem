import React, {useState} from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

function Admin(){


   const [hola,sethola] = useState([])
   const [resultmissing, setresultmissing] = useState([])
   const [resultsymp, setresultsymp] = useState([])
   const [resultextend, setresultextend] = useState([])

   const welders=["Pierre Cox", "Miranda Shaffer", "Brand Krammer", "Alice Ramos", "Erick Diaz"];
   let answer=[]
   let missing=[]
  
                
                const consultmissing = () => {
                    setresultsymp([])
        setresultextend([])
                    
                    Axios.get("https://backcovid.herokuapp.com/resconsulta").then((response2)=>{
                               setresultmissing(response2.data)
                            })
                }
        
                const consultsymptom = () => {
                    setresultmissing([{name: "Pierre Cox"}, {name: "Miranda Shaffer"}, {name: "Brand Krammer"}, {name: "Alice Ramos"}, {name: "Erick Diaz"}])
                    setresultextend([])
                        Axios.get("https://backcovid.herokuapp.com/resconsultb").then((response2)=>{
                                   setresultsymp(response2.data)
                                })
                    
                }

                const consultextend = () => {
                    setresultmissing([{name: "Pierre Cox"}, {name: "Miranda Shaffer"}, {name: "Brand Krammer"}, {name: "Alice Ramos"}, {name: "Erick Diaz"}])
                    setresultsymp([])
                        Axios.get("https://backcovid.herokuapp.com/resconsultc").then((response2)=>{
                                   setresultextend(response2.data)
                                })
                   
                }
    return (
        <div>
            <input type="text" value="2015-10-21" disabled/><br /><br />
            <button onClick={consultmissing}>Consult A</button> 
            <button onClick={consultsymptom}>Consult B</button>
            <button onClick={consultextend}>Consult C</button> 

            {resultmissing.map((welder)=>{answer.push(welder.name)})}
                    {welders.map((welder)=>{
                        if (answer.indexOf(welder)==-1) {missing.push(welder)}
                    })}
                    {missing.map((welder)=>{
                        return(
                            <div>{welder}</div>
                        )
                    }
                    )}
                    {resultsymp.map((welder)=>{
                        return(
                            <div>{welder.name}</div>
                        )
                    })}
                   <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "30px"}}>
                    <div style={{width: "90%", border: "solid 1px"}}>
                        <div style={{width: "100%", textAlign: "center", fontSize: "1.5em", fontWeight: "bold"}}>file.txt</div>
                        <br />
                    
                    {resultextend.map((welder)=>{
                        return(
                            <div>
                            <div>{welder.name}</div>
                            <div>{welder.sympa ? "- Sensation of being feverish, having chills like in a flu, or a fever measured with a temperature taken by mouth equal to or greater than 38.1 C (100.6 F)" : ""}</div>
                            <div>{welder.sympb ? "- Sudain loss of orodat without nasal congestion (nose mouth) with or without loss of taste" : ""}</div>
                            <div>{welder.sympc ? "- Recent or recently worsened chronic cough " : ""}</div>
                            <div>{welder.sympd ? "- Difficulty breathing or shortness of breath " : ""}</div>
                            <div>{welder.sympe ? "- Sore throat " : ""}</div>
                            <div>{welder.sympf ? "- Runny nose or stuffy nose (nose mouth) of unknown cause" : ""}</div>
                            <div>{welder.sympg ? "- Stomach acher" : ""}</div>
                            <div>{welder.symph ? "- Nausea (heartache) or vomiting" : ""}</div>
                            <div>{welder.sympi ? "- Diarrhea " : ""}</div>
                            <div>{welder.sympj ? "- Unusual intense fatigue for no obvious reason" : ""}</div>
                            <div>{welder.sympk ? "- Significant loss of appetite" : ""}</div>
                            <div>{welder.sympl ? "- Generalized muscle pain or unusual stiffness (not related to physical exertion)" : ""}</div>
                            <div>{welder.sympm ? "- Unusual headache" : ""}</div>
                            </div>
                        )
                    })}
                    </div>
                </div> 

        </div>
    )
}

export default Admin;