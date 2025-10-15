import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState('');
  const [list, setlist] = useState([]);

  function addTask() {
    if (list) {
      setTasks([...tasks, list]);
      setInput('');
    }
  }

  return (
    <div>
      <input value={list} onChange={(e) => setlist(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;


