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
              this.state.books.map((bookItem) => 
                <BookItem key={bookItem.id} bookObject={bookItem}></BookItem>
              )
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
