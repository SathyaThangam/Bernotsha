import React        from 'react';
import InputField   from './InputField';
import SubmitButton from './SubmitButton';
import UserStore    from './stores/UserStore';
import TextView     from './TextView'
import {toast}      from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
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
      requiredemail:'',
      requiredpassword:'',
      requiredmobile:'',
      requiredconfirmpassword:'',
      buttonDisabled: false
    })
  }
  async login(){
    UserStore.showSignUp = false;
  }





  async doSign(){
    if(!this.state.sname){
      this.setState({
        requiredemail:'* E-MAIL ID IS REQUIRED'
      })
      toast.error("E-MAIL ID IS REQUIRED",{position: toast.POSITION.TOP_CENTER})
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.sname)==false)
    {
      this.setState({
        requiredemail:'ENTER VALID EMAIL ADDRESS'
      })
      toast.error("ENTER VALID EMAIL ADDRESS",{position: toast.POSITION.TOP_CENTER})
      return;

    }
    if(!this.state.smobile){
      this.setState({
        requiredmobile:'* MOBILE NUMBER IS REQUIRED',
        requiredemail:''
      })
      toast.error("PASSWORD IS REQUIRED",{position: toast.POSITION.TOP_CENTER})
      return;
    }
    if(!this.state.spassword){
      this.setState({
        requiredpassword:'* PASSWORD IS REQUIRED',
        requiredmobile:''
      })
      toast.error("PASSWORD IS REQUIRED",{position: toast.POSITION.TOP_CENTER})
      return;
    }
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(this.state.spassword)==false)
    {
      this.setState({
        requiredpassword:"PASSWORD PATTERN DO NOT MATCH"
      })
      toast.error('PASSWORD PATTERN DO NOT MATCH',{position: toast.POSITION.TOP_CENTER})
      return;
    }
    if(!this.state.scpassword){
      this.setState({
        requiredconfirmpassword:'*CONFIRM PASSWORD IS REQUIRED',
        requiredpassword:''
      })
      toast.error("ALL FIELDS ARE REQUIRED",{position: toast.POSITION.TOP_CENTER})
      return;
    }



    if(this.state.spassword != this.state.scpassword)
    {
      toast.error("* PASSWORD DO NOT MATCH",{position: toast.POSITION.TOP_CENTER})
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
        toast.success("SUCCESSFULLY REGISTERED",{position: toast.POSITION.TOP_CENTER})
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
      
      <TextView
        text='CODINGMART'
        disabled='false'
        className='heading'
      />
      

      <TextView
        text='E-MAIL'
        disabled='false'
        className='userfield'
      /> 
      <InputField
        type='email'
        placeholder='email'
        value={this.state.sname ? this.state.sname : ''}
        onChange={ (val) => this.setInputValue('sname',val) }
      />
      <TextView
        text={this.state.requiredemail}
        disabled='true'
        className='requiredText'
      />       
      <TextView
        text='MOBILE'
        disabled='false'
        className='userfield'
      /> 
      <InputField
        type='text'
        placeholder='Mobile'
        value={this.state.smobile ? this.state.smobile : ''}
        onChange={ (val) => this.setInputValue('smobile',val) }
      />
      <TextView
        text={this.state.requiredmobile}
        disabled='true'
        className='requiredText'
      /> 
      <TextView
        text='PASSWORD'
        disabled='false'
        className='userfield'
      /> 
      <InputField
        type='password'
        placeholder='Password'
        value={this.state.spassword ? this.state.spassword : ''}
        onChange={ (val) => this.setInputValue('spassword',val) }
      />
      <TextView
        text={this.state.requiredpassword}
        disabled='true'
        className='requiredText'
      /> 
      <TextView
        text='CONFIRM PASSWORD'
        disabled='false'
        className='userfield'
      /> 
     <InputField
        type='password'
        placeholder='Confirm Password'
        value={this.state.scpassword ? this.state.scpassword : ''}
        onChange={ (val) => this.setInputValue('scpassword',val) }
      />
      <TextView
        text={this.state.requiredconfirmpassword}
        disabled='true'
        className='requiredText'
      /> 


      <SubmitButton
        text='BACK TO LOGIN'
        disabled={this.state.buttonDisabled}
        onClick={ () => this.login()}
      />
      <SubmitButton
        text='SIGNUP'
        disabled={this.state.buttonDisabled}
        onClick={ () => this.doSign()}
      />      

    </div>
  );
}
}

export default SignupForm;
