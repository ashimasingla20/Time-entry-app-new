import { Link } from 'react-router-dom';
import React from 'react';
import {
	withRouter
} from 'react-router-dom';
class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push('/login');
  }
  render() {
    return(
      <nav style={{display:'flex', justifyContent:'flex-end', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <Link to="/tasks" style={{margin: '20px 20px 20px 20px',  
          textDecoration: 'none',
          fontSize: '18px',
          color: 'rgba(0,0,0,0.6)'}}>Tasks</Link>
        <Link to="/addTask" style={{margin: '20px 20px 20px 20px',  
          textDecoration: 'none',
          fontSize: '18px',
          color: 'rgba(0,0,0,0.6)'}}>Add Task</Link>
        <button onClick={this.handleLogout} style={{border: '0px',
          fontSize: '18px',
          color: 'rgba(0,0,0,0.6)',
          fontWeight: 'normal'}}>Logout</button>
      </nav>
    )
  }
}
export default withRouter(NavBar);
