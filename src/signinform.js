import React from "react";
import "./App.css";
class signinform extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username:"",
            password:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    namehandler=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    passwordhandler=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit=(event)=>{
        // alert("${this state.username} Login Successfully")
        console.log(this.state);
        this.setState({
            username:"",
            password:"",
        })
    event.preventDefault()
    }


    render()
    {
        return(
            <div className="box">
                <div className="leftbox">
                <div className="black" />
                <div className="image" />
                <div className="innerbox">
                    <form onSubmit={this.handleSubmit}>
                        <div className="text"><h4><span>LOGIN</span></h4>
                            <div className="inputbox">
                                <input className="inputs" type="text" value={this.state.username} onChange={this.namehandler}placeholder="Username" />
                            </div>
                            <div className="inputbox">
                                <input className="inputs" type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" />
                            </div>
                            <input className="btn" type="submit" value="Submit" />
                            <div className="othertext">
                                Haven't Registered Yet? Register Now
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
export default signinform;

