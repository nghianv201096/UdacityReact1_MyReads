import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import BookItem from '../BookItem/BookItem';
import * as BooksAPI from '../BooksAPI'

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
        console.log(books);
        this.setState(() => ({
          books
        }));
      });
  }

  render () {
    const bookStatuses = [
      {
        code: "wantToRead",
        name: "Want to Read"
      },
      {
        code: "currentlyReading",
        name: "Currently Reading"
      },
      {
        code: "read",
        name: "Read"
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              bookStatuses.map((bookStatus) =>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookStatus.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        this.state.books.filter((bookItem) => bookItem.shelf === bookStatus.code)
                          .map((bookItem) => 
                            <BookItem bookObject={bookItem}>
                            </BookItem>
                          )
                      }
                    </ol>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  // bla: PropTypes.string,
};

BookList.defaultProps = {
  // bla: 'test',
};

export default BookList;
