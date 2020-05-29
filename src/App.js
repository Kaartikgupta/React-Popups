  import React from "react";
 
  import Signupform from "./signupform";

import Signinform from "./signinform";
 
  
  class App extends React.Component{
    render()
    {
      return(
        <div>
        <Signinform />
        <Signupform />
        </div>
        )
    }
  }


export default App;
