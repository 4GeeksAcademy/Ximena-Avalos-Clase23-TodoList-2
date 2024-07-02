import React, { useState } from 'react';



import { ToDoList } from './toDoList';

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <main className="container">
      <h1>To Do List</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleFormSubmit} className="mb-4">
            <input
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              className="form-control form-control-lg"
              placeholder="What needs to be done?"
            />
          </form>
          <ToDoList taskList={taskList} onDeleteTask={handleDeleteTask} />
        </div>
        <div className="card-footer">
          {taskList.length} item{taskList.length !== 1 ? 's' : ''} left
        </div>
      </div>
      <div style={{height: "5px", width:"98%", backgroundColor:"#fff"}} className="border mx-1 shadow-sm rounded"> </div>
      <div style={{height: "5px", width:"97%", backgroundColor:"#fff"}} className="border mx-2 shadow-sm rounded"> </div>
    </main>
  );
};

export default Home;