import React from 'react'

const Book = (props) => {
    //attribute, eventHandler
    // onClick, onMouseEvent
    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
        alert('lo cc');
    }
    const clickComplex = (author) =>{
      console.log(author);
  }
    const { img, title, author } = props;
    console.log(props);
    return (
      <article className="book" onMouseOver={()=> {
          console.log(title);
      }}>
        <img src={img} alt=""></img>
        <h1 onClick={() => console.log({title})}>{title}</h1>
        <h2>{author}</h2>
        <button type='button' onClick={clickHandler}>check</button>
        {/* {complexity event handler} */}
        <button type='button' onClick={()=>clickComplex(author)}>complex</button>
      </article>
    );
  };
  export default Book;