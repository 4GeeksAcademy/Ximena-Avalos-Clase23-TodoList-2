import React, { useState, useEffect } from 'react';
import { ToDoList } from './toDoList';

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [person, setPerson] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const getPerson = () => {
    fetch('https://playground.4geeks.com/todo/users/XimenaAvalos', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        console.log(resp.ok);
        console.log(resp.status); 
        return resp.json();
      })
      .then(data => {
        console.log(data);
        setPerson(data);
        setTaskList(data.todos.map(todo => todo.label)); // Assuming todos is an array of tasks
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main className="container">
      <h1>To Do List for {person.name}</h1>
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
    </main>
  );
};

export default Home;