  import React from "react";
  // import logo from "./Costues-Logo.png"
  import "./App.css";

  class signin extends React.Component{
    render()
    {
      return(
        <div className="box">
          <div className="leftbox">
            <div className="black" />
            <div className="image" />
            <div className="innerbox">
              <div className="text"><h4><span>LOGIN!</span></h4>
                <div className="inputbox">
                  <input className="inputs" type="text" placeholder="Username" />
                </div>
                <div className="inputbox">
                  <input className="inputs" type="password" placeholder="Password" />
                </div>
                <div className="btn">Login</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  export default signin;
