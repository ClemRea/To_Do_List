import React from "react";
import Get from "./Tools/Get";
import Store from "./Tools/Store";

function Delete({ task, onDelete, isUrgent }) {
  const handleDelete = () => {
    const taches = Get("Todo") || "[]";
    const updateTaches = taches.filter((i) => i.task !== task);
    Store("Todo", updateTaches);

    onDelete(task);
  };

  const taskClassName = isUrgent
    ? "liste_element urgent_task"
    : "liste_element";
  return (
    <li className={taskClassName} id="liste_element">
      {task}
      <span className="icon_container" onClick={handleDelete}>
        <i className="fa-solid fa-trash poubelle"></i>
      </span>
    </li>
  );
}

export default Delete;
