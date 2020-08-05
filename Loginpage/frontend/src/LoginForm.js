import React        from 'react';
import InputField   from './InputField';
import SubmitButton from './SubmitButton';
import UserStore    from './stores/UserStore';
import {toast}      from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TextView from './TextView';

toast.configure()
class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      cpassword:'',
      buttonDisabled: false,
      required:''
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
      username:'',
      password:'',
      cpassword:'',
      buttonDisabled: false,
    })
  }


  async doSign()
  {
    UserStore.showSignUp = true;
    
  }



  async doLogin(){
    if(!this.state.username && !this.state.password && !this.state.cpassword){
      this.setState({
        required:"* ALL FIELDS ARE REQUIRED"
      })
      toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_CENTER})
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username)==false)
    {
      toast.info('ENTER VALID EMAIL ADDRESS',{position: toast.POSITION.TOP_CENTER})
      return;

    }


    if(this.state.password!=this.state.cpassword)
    {
      toast.error("PASSWORDS DO NOT MATCH",{position: toast.POSITION.TOP_CENTER})
      this.resetForm();
      return;
    }
    this.setState({
      buttonDisabled:true
    })
    try{
      let res = await fetch('/login',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });
      let result = await res.json();
      if(result && result.success){
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else if(result && result.success === false){
        this.resetForm();
        toast.error(result.msg,{position: toast.POSITION.TOP_CENTER})
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
        disabled='true'
        className='heading'
      />
      

      <TextView
        text='E-MAIL'
        disabled='true'
        className='userfield'
      />      
      <InputField
        type='email'
        placeholder='email'
        value={this.state.username ? this.state.username : ''}
        onChange={ (val) => this.setInputValue('username',val) }
      />
      <TextView
        text={this.state.required}
        disabled='true'
        className='requiredText'
      />  
      <TextView
        text='PASSWORD'
        disabled='true'
        className='userfield'
      />         
      <InputField
        type='password'
        placeholder='Password'
        value={this.state.password ? this.state.password : ''}
        onChange={ (val) => this.setInputValue('password',val) }
      />
      <TextView
        text={this.state.required}
        className='requiredText'
      />       
      <TextView
        text='CONFIRM PASSWORD'
        className='userfield'
      />        
      <InputField
        type='password'
        placeholder='Confirm Password'
        value={this.state.cpassword ? this.state.cpassword : ''}
        onChange={ (val) => this.setInputValue('cpassword',val) }
      />
      <TextView
        text={this.state.required}
        disabled='true'
        className='requiredText'
      />  

      <SubmitButton
        text='LOGIN'
        disabled={this.state.buttonDisabled}
        onClick={ () => this.doLogin()}
      />
      <SubmitButton
        text='SIGNUP'
        disabled={this.state.buttonDisabled}
        onClick={()=>this.doSign()}
      />
    </div>
  );
}

}

export default LoginForm;
