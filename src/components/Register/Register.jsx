import React from 'react';
import './Register.css';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        }
    }

    onEmailChange=(event)=>{
        this.setState({email:event.target.value});
    }

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }

    onNameChange=(event)=>{
        this.setState({name:event.target.value});
    }

    onRegister=()=>{
        fetch('https://salty-citadel-62018.herokuapp.com/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password
            })
        }).then(response=>response.json())
        .then(user=>{
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

   render(){
    return(
        <div class='box'>
                <h1>Register</h1>
                    <label for='name'>Name</label>
                    <input type='text' name='name' onChange={this.onNameChange} />
                    <label for='email-address'>Email</label>
                    <input type='email' name='email' onChange={this.onEmailChange} />
                    <label for='password'>Password</label>
                    <input type='password' name='password' onChange={this.onPasswordChange} />
                    <input 
                    onClick={this.onRegister}
                    type='submit' value='Sign Up' />
        </div>
);
   }
}

export default Register;