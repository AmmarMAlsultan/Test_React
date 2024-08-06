import React from 'react';
import "./style.css";
import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter as Router } from 'react-router-dom';




// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <Home/>,
//     errorElement:<h1 style={{color:"red"}}>Error</h1>
//   },
//   {
//     path: "/contact",
//     element: <Contant/>,
//     errorElement:<h1 style={{color:"red"}}>Error</h1>
//   },
//   {
//     path: "/news",
//     element: <News/>,
//     errorElement:<h1 style={{color:"red"}}>Error</h1>
//   },
//   {
//     path: "/about",
//     element: <About/>,
//     errorElement:<h1 style={{color:"red"}}>Error</h1>
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="continer">
    <div style={{ backgroundColor: "#333", width: "100%" }}>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <App />
      </Router>
    </div>
  </div>
);