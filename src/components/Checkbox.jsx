import React, { useState } from "react";
import "../styles/form.css";

function Checkbox({ label, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <label htmlFor="urgent" className="urgent" id="urgent">
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        id="urgent"
        className="urgent_checkbox"
      />
    </label>
  );
}

export default Checkbox;
