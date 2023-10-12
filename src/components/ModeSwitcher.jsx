import React from "react";
import "../styles/dark_mode.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle_container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check" className="label_text">
        Dark Mode
      </label>
    </div>
  );
};
