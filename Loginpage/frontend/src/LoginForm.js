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
      buttonDisabled: false,
      requiredemail:'',
      requiredpassword:''
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
      buttonDisabled: false,
    })
  }


  async doSign()
  {
    UserStore.showSignUp = true;
    
  }



  async doLogin(){
    if(!this.state.username){
      this.setState({
        requiredemail:"* E-MAIL ID IS REQUIRED",
      })
      toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_CENTER})
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username)==false)
    {
      toast.info('ENTER VALID EMAIL ADDRESS',{position: toast.POSITION.TOP_CENTER})
      this.setState({
        requiredemail:"ENTER VALID EMAIL ADDRESS"
      })
      return;

    }

    if(!this.state.password){
      this.setState({
        requiredpassword:"* PASSWORD IS REQUIRED",
        requiredemail:""
      })
      toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_CENTER})
      return;
    }

    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(this.state.password)==false)
    {
      this.setState({
        requiredpassword:"NEED EXPECTED PATTERN"
      })
      toast.error('EXPECTED PATTERN NOT MATCHED',{position: toast.POSITION.TOP_CENTER})
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
        text={this.state.requiredemail}
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
        text={this.state.requiredpassword}
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
