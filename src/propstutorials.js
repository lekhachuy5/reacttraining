import React from "react";

import "./index.css";

//setup var

const firstBook = {
  author: "Huy Le",
  title: "I Love You to the Moon and Back",
  img: "./logo512.png",
};

const secondBook = {
  author: "Tu Nguyen",
  title: "I Love You to the Sun and White",
  img: "./logo512.png",
};

function BookList() {
    //props children
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          error molestias quos dolor aperiam impedit dolorum ipsum odio, saepe
          amet. Voluptatum inventore ipsum quis totam iste blanditiis quae
          beatae voluptatem.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
//props
// const Book = (props) => {
//  //jsx javascripts
//  //   console.log(props);
//    //use props to take in-tag element
//   const {img,title,author} = props;
//   return (
//     <article className="book">
//       <img src={props.img} alt=""></img>
//       <h1>{props.title}</h1>
//       <h2>{props.author}</h2>
//     </article>
//   );
// };

// props destructuring
const Book = (props) => {
    //can use this to replace for props
  const {img,title,author,children} = props;
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h2>{author}</h2>
      {children}
    </article>
  );
};

export default BookList;
