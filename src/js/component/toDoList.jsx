import React, { useState } from 'react';

export const ToDoList = ({ taskList, onDeleteTask }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ul className="list-group list-group-flush">
      {taskList.map((task, index) => (
        <li
          key={index}
          className="list-group-item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span style={{ flex: 1 }}>{task}</span>
          {hoveredIndex === index && (
            <button
              className="btn btn-sm"
              onClick={() => onDeleteTask(index)}
              style={{ marginLeft: 'auto' }}
            >
              x
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};