import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const types=['business', 'consultant', 'IT', 'leisure', 'Fitness'];
class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      type:'',
      startTime: null,
      endTime: null
    }
  }
  handleClick =(event) => {
    let ts = new Date(Date.now());
    this.setState({ [event.target.name] : ts });
  }
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }
  handleSubmit =(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    let data = this.state;
    axios.post(`http://localhost:4000/addTask`,{...data}, {
        headers: headers
      }).then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }
  render() {
    return (<div>
      <h3> Add Task</h3>
      <form className="center-align" onSubmit={this.handleSubmit}>
        <label>Task Name</label>
        <input type="text" name="name" onChange={this.handleChange}/>
        <label>Type</label>
        <select name="type" onChange={this.handleChange}>
        {
          types.map((type, key) => <option value={type} key={`type-${key}`}>{type}</option>)
        }
        </select>
        <button type="button" name="startTime" onClick={this.handleClick}>Start Time</button>
        <button type="button" name="endTime" onClick={this.handleClick}>End Time</button>
        <button type="submit">Submit</button>
      </form>
      <div>
        To view all tasks Go to <Link to="/tasks">See All Tasks</Link>
      </div>
    </div>);
  }
};
export default AddTask;
