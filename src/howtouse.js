import React from "react";

function How() {
    return (
        <div>
            <div style={{width: "100%", textAlign: "center", fontWeight: "bold"}}>Covid Alert System</div><br />
            <div>This is my proposal in my workplace of a software that allows employees to declare covid symptoms</div><br />
            <div>Each employee have to declare if they have symptoms or not every day. </div><br />
            <div style={{fontWeight: "bold"}}>-- How it works --</div><br />
            <div>Since every welder has its own computer in my workplace, we can use it to run a program to input data on a databse which will be stored on a central pc.</div><br />
            <div>Human Resources Department will have its own software to check the welder's data.</div><br /> <br />
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}> 
                <div className={"systemimage"}>
                    <div className={"serverside"}> 
                        <div style={{width: "100%", textAlign: "center"}}>Server/HR Side</div> 
                    </div>
                    <div className={"clientside"}> 
                        <div style={{width: "100%", textAlign: "center", color: "green"}}>Client/Welder Side</div> 
                        <div style={{position: "absolute", top: "45px", left: "80px"}}>Pierre Cox</div>
                        <div style={{position: "absolute", top: "90px", left: "80px"}}>Miranda Shaffer</div>
                        <div style={{position: "absolute", top: "135px", left: "80px"}}>Brand Krammer</div>
                        <div style={{position: "absolute", top: "180px", left: "80px"}}>Alice Ramos</div>
                        <div style={{position: "absolute", top: "225px", left: "80px"}}>Erick Diaz</div>
                    </div>
                    <div className={"blueline"}></div>
                    <div className={"greenline"}></div>
                    <div className={"database"}>Database</div>
                </div>
            </div>
            <div style={{width: "100%", textAlign: "center", fontWeight: "bold", fontSize: "1.5em"}}>Live Demo</div><br />
            <div style={{fontWeight: "bold"}}>-- How to use --</div><br />
            <div>Today is october 21, 2015.</div>
            <div>All welders (five in total) have already fill his data on the system, except for Erick Diaz</div>
            <div>You can <b>check the data</b> or <b>fill Erick Diaz data</b>.</div><br />
            <div style={{fontWeight: "bold"}}>To check data:</div><br />
            <div style={{marginLeft: "30px"}}>
                <div>- go to server side (blue) and use the buttons, you will see a list of all welders in the company</div>
                <div>- you are now playing HR role (since this is a demo you cannot change the date) </div>
                <div>- <b>Consult A</b> will show you who is missing to input data</div> 
                <div>- <b>Consult B</b> will show you who has declared having at least one symptom</div>
                <div>- <b>Consult C</b> will create a complete report with a list of everyone's symptoms called file.txt</div>
            </div><br />
            <div style={{fontWeight: "bold"}}>To input data:</div><br />
            <div style={{marginLeft: "30px"}}>
                <div>go client side (green) </div>
                <div>if you don't have symptoms click on "I don't have any"</div>
                <div>if you have symptoms click on "I have some" and select them</div>
                <div>when your are ready click on "Send"</div>
                <div>You can now check the changes on the server side</div>
                <div>If you want to run another trial, click on "Reset" it will restart the system</div>
            </div><br />
            <div style={{fontWeight: "bold"}}>Have fun!!!</div><br /><br />
        </div>
    )
}

export default How;