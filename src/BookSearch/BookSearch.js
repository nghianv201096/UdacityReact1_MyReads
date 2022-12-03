import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import BookItem from '../BookItem/BookItem';
import * as BooksAPI from '../BooksAPI'

class BookSearch extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.onUpdateBook = this.onUpdateBook.bind(this);
  }

  onUpdateBook() {
    if(this.props.onUpdateBook) {
      this.props.onUpdateBook();
    }
  }

  searchTimeout = 0;

  getData = (key) => {
    if(!key) {
      this.setState(() => ({
        books: []
      }));
    } else {
      BooksAPI.search(key)
        .then((rs) => {
          console.log(rs);
          const books = Array.isArray(rs) ? rs : [];
          console.log(`done search ${books.length} books`);
          this.setState(() => ({
            books
          }));
        });
    }
  }

  searchBooks(key) {    
    console.log(`...pending search for ${key}`);
    if(this.searchTimeout) {
      window.clearTimeout(this.searchTimeout);
    }
    
    this.searchTimeout = window.setTimeout(() => {
      this.getData(key);
    }, 200);
  }

  render () {
    console.log('...re-render the search page');

    const onShelfBooks = this.props.books;
    const books = this.state.books;

    books.forEach(book => {
      const onShelfBook = onShelfBooks.filter(b => b.id === book.id);
      if(onShelfBook.length) {
        console.log(`set status for book: ${book.title} to ${onShelfBook[0].shelf}`);
        book.shelf = onShelfBook[0].shelf;
      }
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search'
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={e => this.searchBooks(e.target.value)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              books.map((book) => 
                <BookItem key={book.id} handleUpdate={this.onUpdateBook} bookObject={book}></BookItem>
              )
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
