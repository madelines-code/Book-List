import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="book_list_container">
      <h1 className="list-title">List of Books</h1>
      <p className="book-list">
      <BookList/>
      </p>
    </div>
  );
}

export default App;
