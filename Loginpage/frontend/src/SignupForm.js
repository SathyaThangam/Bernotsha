import React        from 'react';
import InputField   from './InputField';
import SubmitButton from './SubmitButton';
import UserStore    from './stores/UserStore';


class SignupForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      sname:'',
      spassword:'',
      smobile:'',
      scpassword:'',
      buttonDisabled: false
    }
  }

  setInputValue(property,val)
  {
    val=val.trim();
    if(val.length > 20){
      return;
    }
    this.setState({
      [property]: val
    })
  }
  resetForm(){
    this.setState({
      sname:'',
      spassword:'',
      smobile:'',
      scpassword:'',
      buttonDisabled: false
    })
  }
  async login(){
    UserStore.showSignUp = false;
  }





  async doSign(){
    if(!this.state.sname){
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.sname)==false)
    {
      alert("Enter valid email address");
      return;

    }
    if(!this.state.spassword){
      return;
    }
    if(!this.state.smobile){
      return;
    }
    if(!this.state.scpassword){
      return;
    }
    if(this.state.spassword != this.state.scpassword)
    {
      alert("PASSWORD DO NOT MATCH");
      this.resetForm();
      return;
    }
    this.setState({
      buttonDisabled:true
    })
    try{
      let res = await fetch('/signup',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sname: this.state.sname,
          spassword: this.state.spassword,
          smobile: this.state.smobile,
          scpassword:this.state.scpassword

        })
      });
      let result = await res.json();
      if(result && result.success){
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else if(result && result.success === false){
        this.resetForm();
        this.login();
        alert(result.msg);
      }
    }
    catch(e){
      console.log(e);
      this.resetForm();
    }
  }

  render(){
  return (
    <div className="loginForm">
      
      SIGN IN
      <InputField
        type='email'
        placeholder='email'
        value={this.state.sname ? this.state.sname : ''}
        onChange={ (val) => this.setInputValue('sname',val) }
      />
      <InputField
        type='text'
        placeholder='Mobile'
        value={this.state.smobile ? this.state.smobile : ''}
        onChange={ (val) => this.setInputValue('smobile',val) }
      />
      <InputField
        type='password'
        placeholder='Password'
        value={this.state.spassword ? this.state.spassword : ''}
        onChange={ (val) => this.setInputValue('spassword',val) }
      />
     <InputField
        type='password'
        placeholder='Confirm Password'
        value={this.state.scpassword ? this.state.scpassword : ''}
        onChange={ (val) => this.setInputValue('scpassword',val) }
      />


      <SubmitButton
        text='Login'
        disabled={this.state.buttonDisabled}
        onClick={ () => this.doSign()}
      />

    </div>
  );
}
}

export default SignupForm;
