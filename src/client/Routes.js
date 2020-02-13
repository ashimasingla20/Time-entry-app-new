import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
export default () => {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/addTask" component={AddTask}/>
      <Route path="/tasks" component={Tasks}/>
    </div>
  )
}
