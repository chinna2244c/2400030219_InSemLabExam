import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask} style={{ marginLeft: '10px' }}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;