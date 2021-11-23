import {useState} from 'react';

const NewBook = (props)=>{
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [genre, setGenre]=useState('');
  const [description, setDescription]=useState('');
  const [isbn, setISBN]=useState('');
  const handleSubmit = (event)=>{
    // by default we are refreshing the page
    // we don't refresh page in SPA (single page app)
    event.preventDefault();
    //console.log('submitted');
    // get values from my form
    console.log('title:', title);
    console.log('author:', author);
    console.log('genre:', genre);
    console.log('description:', description);
    console.log('isbn:', isbn);
    props.x({ isbn: (Math.random() * 10000000000000 ), title: title, author: author, 
      genre: genre, description: description });
  };
  return (
    <div className = 'book-form'>
      <h1>New Book Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <p>Author</p>
        <input value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <p>Genre</p>
        <input value={genre} onChange={(e)=>setGenre(e.target.value)}/>
        <p>Description</p>
        <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <br />
        <button>Add Book</button>
      </form>
    </div>
  );
};
export default NewBook;