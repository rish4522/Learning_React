import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const customStyle =  {
  color : ""
};

var greeting = ['Good Morning', 'Good Afternoon', 'Good Evening'];
var time = (new Date()).getHours();
console.log(time);
if (time >= 0 && time < 12) {
  greeting = greeting[0];
  customStyle.color = "red";
} else if (time >= 12 && time < 18) {
  greeting = greeting[1];
  customStyle.color = "green";
} else {
  greeting = greeting[2];
  customStyle.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1 className='greeting' style={customStyle}>
        {greeting}
      </h1>
    </>
    <App />
  </React.StrictMode>
);
reportWebVitals();
