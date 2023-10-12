import React, { useEffect, useState } from "react";
import AddButton from "./button";
import { Toggle } from "./ModeSwitcher";
import Get from "./Tools/Get";
import Store from "./Tools/Store";
import "../styles/header.css";
import "../styles/button.css";

function Page() {
  const [isDark, setIsDark] = useState(Get("darkMode") === true);

  useEffect(() => {
    Store("darkMode", isDark);
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="header_container" id="card_todo">
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="titre_h1" id="titre_h1">
        A Faire :
      </h1>
      <AddButton />
    </div>
  );
}

export default Page;
