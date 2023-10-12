import React, { useState } from "react";
import TaskList from "./TaskList";

function TaskPager({ tasks, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 7;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  const pagButton = Array.from({ length: totalPages }, (_, index) => (
    <span
      key={index}
      className={`page_button ${currentPage === index + 1 ? "active" : ""}`}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </span>
  ));

  return (
    <div>
      <TaskList tasks={tasks.slice(startIndex, endIndex)} onDelete={onDelete} />
      {totalPages > 1 && <div className="pagination">{pagButton}</div>}
    </div>
  );
}

export default TaskPager;
