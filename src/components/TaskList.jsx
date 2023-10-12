import React from "react";
import Delete from "./Delete";
import "../styles/taskList.css";

function TaskList({ tasks, onDelete }) {
  const sortedTask = [...tasks].sort((a, b) =>
    a.urgent === b.urgent ? 0 : a.urgent ? -1 : 1
  );
  return (
    <>
      <ul className="liste_container">
        {sortedTask.map((task, index) => (
          <Delete
            key={index}
            task={task.task}
            onDelete={onDelete}
            isUrgent={task.urgent}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
