import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    console.log("Задача добавлена!");
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = e.target.elements.task.value;
          addTask(task);
          e.target.reset();
        }}
      >
        <input type="text" name="task" placeholder="Введите задачу" required />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;