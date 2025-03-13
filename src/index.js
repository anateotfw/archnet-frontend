import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Remove the extension handling code
// This was added to prevent errors from cryptocurrency wallet extensions
// If you don't use these extensions or don't mind seeing these errors, you can safely remove it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Sub more: https://bit.ly/CRA-vitals
reportWebVitals();
