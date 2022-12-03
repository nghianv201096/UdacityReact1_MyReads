import React from 'react';
import { Link } from 'react-router-dom'
import BookItem from '../BookItem/BookItem';
import * as BooksAPI from '../BooksAPI'
import * as Common from '../Common'

class BookList extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    BooksAPI.getAll()
      .then((books) => {
        console.log(`getting ${books.length} books`);
        this.setState(() => ({
          books
        }));
      });
  }

  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              Common.shelves.map((shelf) =>
                <div key={shelf.code} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        this.state.books.filter((bookItem) => bookItem.shelf === shelf.code)
                          .map((bookItem) => <BookItem key={bookItem.id} handleUpdate={this.getData} bookObject={bookItem}></BookItem>)
                      }
                    </ol>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
