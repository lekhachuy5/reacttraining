import React from 'react'
import ReactDOM from 'react-dom'
import Mini from './minibook';
import Propstu from './propstutorials';
import SimpList from './simplebooklist';
//css
import './index.css';

//JSX rule
//Return single element
//div/section/article or React.Fragment
//use camelCase for attribute
//className instead of class
//close every Elements
//formatting

//Nested component & tool

function Greeting() {
  return (   
      <div className=''>
        <Hello/>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
          <img src="" alt=""/>
          <input type="text" name="c" id= ""/>
        </ul>
      </div>
  );
}
const Hello = () => <h1>hello everyone</h1>;

// const Greeting = () => {
//   return React.createElement(
//     'div',{},React.createElement(
//       'h1',{},'hello world'
//     )
//   );
// }


ReactDOM.render(<Greeting />, document.getElementById('root'));
// ReactDOM.render(<Mini/>, document.getElementById('mini'));
// ReactDOM.render(<Propstu/>, document.getElementById('mini'));
ReactDOM.render(<SimpList/>, document.getElementById('mini'));