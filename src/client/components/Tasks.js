import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const tableHeads =['name','type','startTime','endTime'];
const TaskElement = ({task}) => {
  return (<tr key={task._id}>
    <td>{task.name}</td>
    <td>{task.type}</td>
    <td>{task.startTime}</td>
    <td>{task.endTime}</td>
  </tr>)
}
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      tasks: []
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token);
    axios.get(`http://localhost:4000/tasks`, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }
  render() {
    const {tasks} = this.state;
    return (<div>
      <h3>All Tasks</h3>
      <table>
        <thead>
          <tr>
            {tableHeads.map((tableHead, index) => <th key={`tableHead-${index}}`}>{tableHead}</th>)}
          </tr>
        </thead>
        <tbody>
          { tasks.map((task, index) => <TaskElement task={task} key={`task-${index}`}/>)}
        </tbody>
      </table>
      <div>
        Want to add New Task <Link to="/addTask">Add Task</Link>
      </div>
    </div>);
  }
};
export default Tasks;
