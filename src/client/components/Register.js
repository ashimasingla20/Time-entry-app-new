import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: []
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }
  isFormValid = () => {
    let errors = [],
      error = {};
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isPasswordValid =({password, passwordConfirmation}) => {
    if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ name, email, password, passwordConfirmation }) => {
    return (
      !name.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };
  
  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.isFormValid());
    if (this.isFormValid()) {
      this.setState({ errors: [] });
      const user ={
        username: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      axios.post(`http://localhost:4000/register`, { ...user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token', res.data.token)
      }).catch(err => {
        this.setState({ errors: errors.concat(err) });
      })
    }
  }
  render() {
    const {errors} = this.state;
    return (
      <div>
        <h2>Register</h2>
        <form className="center-align" onSubmit={this.handleSubmit}>
          <div style={{'marginBottom': '20px'}}> 
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} required/>
          </div>
          <div style={{'marginBottom': '20px'}}>
            <label>Email</label>
            <input type="email" name="email" onChange={this.handleChange} required/>
          </div>
          <div style={{'marginBottom': '20px'}}>
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange} required/>
          </div>
          <div style={{'marginBottom': '20px'}}>
            <label>Confirm Password</label>
            <input type="password" name="passwordConfirmation" onChange={this.handleChange} required/>
          </div>
          <button type="submit" style={{background: '#53b2fe',
              padding: '10px',
              border: '0',
              'borderRadius': '5px'}}>Register</button>
        </form>
        {errors.length > 0 && (
            <div>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </div>
          )}
          <div>
            Already a user? <Link to="/login">Login</Link>
          </div>
      </div>
     
    );
  }
};
export default Register;
