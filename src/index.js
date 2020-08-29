import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}
const author = 'Amelia Hepworth';
const Book = () => {
  const title = 'I Love You to the Moon and Back';
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
