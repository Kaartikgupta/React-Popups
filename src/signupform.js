import React from "react";
import "./App.css";
class signupform extends React.Component{
    constructor(props){
        super(props)

        this.state={
            firstname:"",
            lastname:"",
            email:"",
            password:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event)=>{
        this.setState({
            firstname: event.target.value
        })
    }
    lasthandler=(event)=>{
        this.setState({
            lastname: event.target.value
        })
    }
    email=(event)=>{
        this.setState({
            email: event.target.value
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
            firstname:"",
            lastname:"",
            email:"",
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
                        <div className="textt"><h4><span>SIGNUP</span></h4>
                            <div className="inputbox">
                                <input className="inputs" type="text" value={this.state.firstname} onChange={this.firsthandler} placeholder="Firstname" />
                            </div>
                            <div className="inputbox">
                                <input className="inputs" type="text" value={this.state.lastname} onChange={this.lasthandler} placeholder="Lastname" />
                            </div>
                            <div className="inputbox">
                                <input className="inputs" type="text" value={this.state.email} onChange={this.email} placeholder="Email" />
                            </div>
                            <div className="inputbox">
                                <input className="inputs" type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" />
                            </div>
                            <input className="btn" type="submit" value="Submit" />
                            <div className="othertext">
                                Have an Account? Login Instead
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
export default signupform;

