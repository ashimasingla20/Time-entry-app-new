import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	withRouter
} from 'react-router-dom';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: []
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: [] });
    const user ={
      email: this.state.email,
      password: this.state.password
    }
    axios.post(`http://localhost:4000/login`, { ...user })
    .then(res => {
      if(res.message) {
        this.setState({ errors: [{'messge': res.message}] });
      } else {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/tasks');
      }
    
    }).catch(err => {
      console.log(err);
      this.setState({ errors: [{'message': 'Something went wrong please check email and password again'}] });
    })
  }
  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);
  
  render() {
    let {errors} = this.state;
    return (
      <div> 
        <h2>Login</h2>
        <form className="center-align" onSubmit={this.handleSubmit}>
          <div style={{'marginBottom': '20px'}}>
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleChange}/>
          </div>
          <div style={{'marginBottom': '20px'}}>
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange}/>
          </div>
          <button type="submit" style={{background: '#53b2fe',
            padding: '10px',
            border: '0',
            'borderRadius': '5px'}}>Login</button>
        </form>
        {errors.length > 0 && (
          <div>
            <h3>Error</h3>
            {errors[0].message}
          </div>
        )}
        <div>
          New user? <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }
};
export default withRouter(Login);
