import React from "react";

import "./index.css";

//setup list
//props list
const books = [
  {
    author: "Huy Le",
    title: "I Love You to the Moon and Back",
    img: "./logo512.png",
  },

  {
    author: "Tu Nguyen",
    title: "I Love You to the Sun and White",
    img: "./logo512.png",
  },
];
//simple list
const names = ["huy", "tri", "nhu"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newName);

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return (
          <div>
            <Book book={book} ></Book>
          </div>
        );
      })}
      {/*simplist*/}
      {/* {newName} */}
    </section>
  );
}

// props destructuring
const Book = (props) => {
  //can use this to replace for props
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h2>{author}</h2>
    </article>
  );
};

export default BookList;
