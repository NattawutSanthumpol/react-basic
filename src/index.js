import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import HelloComponent from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//การสร้าง Component
// function HelloComponent(){
//   return <h1>สวัสดี Component</h1>
// }

//การสร้าง Component แบบ Class
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>สวัสดี Component</h1>
//   }
// }
//ReactDOM.render(<HelloComponent/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
