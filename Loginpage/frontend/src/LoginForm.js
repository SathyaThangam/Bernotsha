import React        from 'react';
import InputField   from './InputField';
import SubmitButton from './SubmitButton';
import UserStore    from './stores/UserStore';


class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      cpassword:'',
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
      username:'',
      password:'',
      cpassword:'',
      buttonDisabled: false
    })
  }

  async doSign()
  {
    UserStore.showSignUp = true;
    
  }



  async doLogin(){
    if(!this.state.username){
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username)==false)
    {
      alert("Enter valid email address");
      this.resetForm();
      return;

    }

    if(!this.state.password){
      return;
    }
    if(this.state.password!=this.state.cpassword)
    {
      alert("Password do not match");
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
      
      Log in
      <InputField
        type='email'
        placeholder='email'
        value={this.state.username ? this.state.username : ''}
        onChange={ (val) => this.setInputValue('username',val) }
      />
      <InputField
        type='password'
        placeholder='Password'
        value={this.state.password ? this.state.password : ''}
        onChange={ (val) => this.setInputValue('password',val) }
      />
      <InputField
        type='password'
        placeholder='Confirm Password'
        value={this.state.cpassword ? this.state.cpassword : ''}
        onChange={ (val) => this.setInputValue('cpassword',val) }
      />

      <SubmitButton
        text='Login'
        disabled={this.state.buttonDisabled}
        onClick={ () => this.doLogin()}
      />
      <SubmitButton
        text='Signup'
        disabled={this.state.buttonDisabled}
        onClick={()=>this.doSign()}
      />
    </div>
  );
}
}

export default LoginForm;
