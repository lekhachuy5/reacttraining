import React from 'react'

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
    //jsx javascripts
    const tip = 'take this books please';

    return (
        <article className='book'>
            <Image></Image>
            <Title></Title>
            <Author></Author>
            <h1>{tip}</h1>
            {<p>{tip}</p>}
            <p>{6+6}</p>
        </article>
    );
};

const Image = () => <img src="./logo512.png" alt="bokkinmg"/>
const Title = () => <h1>title of book</h1>;
//jsx CSS
const Author = () => <h4 style={{color:'#0063cd', fontSize:'0.75rem', margin:'0.75rem'}}>some one wrote this</h4>;

export default BookList;