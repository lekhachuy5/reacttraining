import React from "react";

import "./index.css";

//import data
import {data} from './booksdata'
import Book from './bookexport'
import {greeting} from './testing/testing'

//simple list
const names = ["huy", "tri", "nhu"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newName);

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {/* {books.map((book,index) => { */}
      {data.map((book,index) => {
        // const { img, title, author } = book;
        return (
          <div>
            {/* {key prop & spread} */}
            <Book key={index} {...book}></Book>
          </div>
        );
      })}
      {/*simplist*/}
      {/* {newName} */}
    </section>
  );
}

// props destructuring
// const Book = (props) => {
//   //attribute, eventHandler
//   // onClick, onMouseEvent
//   const clickHandler = (e) =>{
//       console.log(e);
//       console.log(e.target);
//       alert('lo cc');
//   }
//   const clickComplex = (author) =>{
//     console.log(author);
// }
//   const { img, title, author } = props;
//   console.log(props);
//   return (
//     <article className="book" onMouseOver={()=> {
//         console.log(title);
//     }}>
//       <img src={img} alt=""></img>
//       <h1 onClick={() => console.log({title})}>{title}</h1>
//       <h2>{author}</h2>
//       <button type='button' onClick={clickHandler}>check</button>
//       {/* {complexity event handler} */}
//       <button type='button' onClick={()=>clickComplex(author)}>complex</button>
//     </article>
//   );
// };

export default BookList;
