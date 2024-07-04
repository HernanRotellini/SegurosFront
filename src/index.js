
import reportWebVitals from './reportWebVitals';

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Toaster} from 'sonner';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster duration={3000} position="bottom-left" richColors={true}/>
     <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
