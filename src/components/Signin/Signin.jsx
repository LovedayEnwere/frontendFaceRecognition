import React from 'react';
import './Signin.css';

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state={
                signInEmail:'',
                signInPassword:''
        }
    }

    onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value})
    }

    onSubmitSignIn=()=>{
        fetch('https://young-crag-14202.herokuapp.com/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
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
        const {onRouteChange}=this.props;
        return(
            <div className='box'>
                    <h1>Sign In</h1>
                        <label for='email-address'>Email</label>
                        <input type='email' name='email' onChange={this.onEmailChange} />
                        <label for='password'>Password</label>
                        <input type='password' name='password' onChange={this.onPasswordChange} />
                        <input 
                        onClick={this.onSubmitSignIn}
                        type='submit' value='Sign In' />
                        <div class='signup'>
                            <button onClick={()=>onRouteChange('register')}>Register</button>
                        </div>
            </div>
    );
    }
    
}

export default Signin;