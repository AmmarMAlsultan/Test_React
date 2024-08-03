import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="continer">
    <div style={{ backgroundColor: "#333", width: "100%" }}>
      <App/>
    </div>
  </div>
);