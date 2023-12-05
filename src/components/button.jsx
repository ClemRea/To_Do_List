import React, { useEffect, useState } from "react";
import Add from "./Add.jsx";
import TaskList from "./TaskList.jsx";
import Get from "./Tools/Get.jsx";
import Checkbox from "./Checkbox.jsx";
import Store from "./Tools/Store.jsx";
import TaskPager from "./TaskPager.jsx";
import "../styles/modal.css";
import "../styles/form.css";
import "../styles/dark_mode.css";
import "../styles/task_pager.css";
import "../styles/utils/tel_resolution/tel_resolution.css";

function AddButton() {
  const [modal, setModal] = useState(false);
  const handleButtonClick = () => {
    setModal(!modal);
  };

  // récupérer la valeur de l'input tache
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedTask = Get("Todo");
    if (storedTask) {
      setTasks(storedTask);
    }
  }, []);

  const afficherTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { task: inputValue, urgent: isChecked };
      Add(newTask);

      // Ajoutez la nouvelle tâche avec la propriété inputValue
      setTasks([...tasks, newTask]);

      // Réinitialisez l'inputValue
      setInputValue("");
      setIsChecked(false);

      Store("Todo", [...tasks, newTask]);

      setModal(false);
    }
  };

  const handleDelete = (taskToDelete) => {
    const updateTasks = tasks.filter((task) => task.task !== taskToDelete);
    setTasks(updateTasks);

    Store("Todo", updateTasks);
  };

  const handleCheckboxChange = (newValue) => {
    setIsChecked(newValue);
  };

  return (
    <>
      {tasks.length > 7 ? (
        <TaskPager tasks={tasks} onDelete={handleDelete} />
      ) : (
        <TaskList tasks={tasks} onDelete={handleDelete} />
      )}
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal_content" id="modal_content">
              <form className="form_container" id="form_container">
                <input
                  type="text"
                  id="tache"
                  name="tache"
                  placeholder="Tâche :"
                  className="tache"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <Checkbox
                  label={"Urgent"}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </form>
              <button
                className="submit_btn"
                id="submit_btn"
                onClick={afficherTask}
              >
                AJOUTER
              </button>
              <button className="close_modal" onClick={handleButtonClick}>
                <span className="line l1"></span>
                <span className="line l2"></span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="btn_container">
        <button
          className="btn"
          id="add_btn"
          onClick={handleButtonClick}
        ></button>
      </div>
    </>
  );
}

export default AddButton;
