import React from 'react'
import ReactDOM from 'react-dom'

function BookList() {
    return (
        <section className='booklist'>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image></Image>
            <Title></Title>
            <Author></Author>
        </article>
    );
};

const Image = () => <img src="./logo512.png" alt="bokkinmg"/>
const Title = () => <h1>title of book</h1>;
const Author = () => <h1>some one wrote this</h1>;

export default BookList;