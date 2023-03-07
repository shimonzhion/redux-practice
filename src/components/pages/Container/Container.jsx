import "./Container.css";
import React from "react";
import ListInput from "../ListInput/ListInput.jsx";
import ListView from "../ListView/ListView";

function Container() {
  return (
    <div className="container">
<ListInput/>
<ListView/>
    </div>
  );
};

export default Container;
