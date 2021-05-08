import React, {useState} from "react";
import "./index.css";
import Axios from "axios";

function Form(){

    const [answer, setanswer] = useState("")

    const Senddata = (symp) => {
        Axios.post("https://backcovid.herokuapp.com/senddata", {sintoma: symp}).then((response)=>{
                   setanswer(response.data)
                })
    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div style={{width: "90%"}}>
            <table>
                <tr>
                    <td className={"symptome"}>Sensation of being feverish, having chills like in a flu, or a fever measured with a temperature taken by mouth equal to or greater than 38.1 C (100.6 F) </td>
                    <td className={"inputcell"}><input type="radio" name="sympA" defaultChecked/><input type="radio" name="sympA" id="sympa" onClick={(ev) => Senddata(ev.target.id)}/></td>
                    <td className={"symptome"}>Stomach ache</td>
                    <td className={"inputcell"}><input type="radio" name="sympG" defaultChecked/><input type="radio" name="sympG" id="sympg" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
                <tr>
                    <td className={"symptome"}>Sudain loss of orodat without nasal congestion (nose mouth) with or without loss of taste </td>
                    <td className={"inputcell"}><input type="radio" name="sympB" defaultChecked/><input type="radio" name="sympB" id="sympb" onClick={(ev) => Senddata(ev.target.id)}/></td>
                    <td className={"symptome"}>Nausea (heartache) or vomiting </td>
                    <td className={"inputcell"}><input type="radio" name="sympH" defaultChecked/><input type="radio" name="sympH" id="symph" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
                <tr>
                    <td className={"symptome"}>Recent or recently worsened chronic cough </td>
                    <td className={"inputcell"}><input type="radio" name="sympC" defaultChecked/><input type="radio" name="sympC" id="sympc" onClick={(ev) => Senddata(ev.target.id)}/></td>
                    <td className={"symptome"}>Diarrhea  </td>
                    <td className={"inputcell"}><input type="radio" name="sympI" defaultChecked/><input type="radio" name="sympI" id="sympi" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
                <tr>
                    <td className={"symptome"}>Difficulty breathing or shortness of breath  </td>
                    <td className={"inputcell"}><input type="radio" name="sympD" defaultChecked/><input type="radio" name="sympD" id="sympd" onClick={(ev) => Senddata(ev.target.id)}/></td>
                    <td className={"symptome"}>Unusual intense fatigue for no obvious reason </td>
                    <td className={"inputcell"}><input type="radio" name="sympJ" defaultChecked/><input type="radio" name="sympJ" id="sympj" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
                <tr>
                    <td className={"symptome"}>Sore throat  </td>
                    <td className={"inputcell"}><input type="radio" name="sympE" defaultChecked/><input type="radio" name="sympE" id="sympe" onClick={(ev) => Senddata(ev.target.id)}/></td>
                    <td className={"symptome"}>Significant loss of appetite  </td>
                    <td className={"inputcell"}><input type="radio" name="sympK" defaultChecked/><input type="radio" name="sympK" id="sympk" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
                <tr>
                    <td className={"symptome"}>Runny nose or stuffy nose (nose mouth) of unknown cause   </td>
                    <td className={"inputcell"}><input type="radio" name="sympF" defaultChecked/><input type="radio" name="sympF" id="sympf" onClick={(ev) => Senddata(ev.target.id)}/></td>
                    <td className={"symptome"}>Generalized muscle pain or unusual stiffness (not related to physical exertion) </td>
                    <td className={"inputcell"}><input type="radio" name="sympL" defaultChecked/><input type="radio" name="sympL" id="sympl" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
                <tr>
                    <td className={"symptome"}></td>
                    <td className={"inputcell"}></td>
                    <td className={"symptome"}>Unusual headache</td>
                    <td className={"inputcell"}><input type="radio" name="sympM" defaultChecked/><input type="radio" name="sympM" id="sympm" onClick={(ev) => Senddata(ev.target.id)}/></td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Form;