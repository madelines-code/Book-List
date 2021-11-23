import {useState, useEffect } from 'react'
import axios from "axios";
import NewBook from './NewBook';

const BookList = (props) => {
  const [books, setBooks ] = useState([]); // gets userState array from initial data in setBooks plus anything added with new form
  // We call it inside a function component to add some local state to it. React will
  // preserve this state between re-renders. useState returns a pair: the current state
  // value and a function that lets you update it. You can call this function from an
  // event handler or somewhere else
  useEffect(()=>{
    // add so that you can make the page do stuff when the componemt mounts
    console.log("mounted");
    getBooks();
  }, []);

  const addBook = (book)=>{
    // STEP 2 is update the UI
    let newBookArray = [book, ...books];
    setBooks(newBookArray);
  };

  const deleteBook = (isbn) => {
    let filterBooks = books.filter((u)=> u.isbn !== isbn);
    setBooks(filterBooks);
  };

  const getBooks = async () =>{
    // this is where we need API call (use axios)
    // pauses code right here and waits for api call to finish
    let response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5');
    console.log(response);
    console.log(response.data.data);
    setBooks(response.data.data);
  };
  const renderBooks = () => {
    if (books.length === 0) {
      return <p> No Books </p>;
    }
    return books.map((book)=>{
      return (
        <div key = {book.isbn} className='book-container'>
          <h1>{book.title}</h1>
          <h3> {book.author}</h3>
          <p> {book.genre}</p>
          <p> {book.description}</p>
          <p> {book.isbn}</p>
          <button onClick={()=>deleteBook(book.isbn)}> delete </button>
        </div>
      );
    });
  };
  return (
    <div className="books">
      <p>Books Here</p>
      <NewBook x={addBook}/>
      <div className='books-list'>{renderBooks()}</div>
    </div>
  );
};


export default BookList;
