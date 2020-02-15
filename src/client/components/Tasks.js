import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
const tableHeads =[{name:'name', colspan:2},{name:'type', colspan:1},{name:'startTime', colspan:'1'},{name:'endTime', colspan:1}];
const TaskElement = ({task}) => {
  return (<tr key={task._id}>
    <td colSpan="2" style={{border: '1px solid #ddd'}}>{task.name}</td>
    <td colSpan="1" style={{border: '1px solid #ddd'}}>{task.type}</td>
    <td colSpan="1" style={{border: '1px solid #ddd'}}>{task.startTime}</td>
    <td colSpan="1" style={{border: '1px solid #ddd'}}>{task.endTime}</td>
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
    axios.get(`http://localhost:4000/tasks`, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }
  render() {
    const {tasks} = this.state;
    return (<div>
      <NavBar/>
      <h3>All Tasks</h3>
      <table style={{width:'100%','borderCollapse':'collapse'}}>
        <thead>
          <tr>
            {tableHeads.map((tableHead, index) => <th colSpan={tableHead.colspan} style={{border: '1px solid #ddd'}} key={`tableHead-${index}}`}>{tableHead.name}</th>)}
          </tr>
        </thead>
        <tbody>
          { tasks.map((task, index) => <TaskElement task={task} key={`task-${index}`}/>)}
        </tbody>
      </table>
      <div style={{'marginTop': '20px'}}>
        Want to add New Task <Link to="/addTask">Add Task</Link>
      </div>
    </div>);
  }
};
export default Tasks;
