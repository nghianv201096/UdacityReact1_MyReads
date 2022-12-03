import React from 'react';
import PropTypes from 'prop-types';
import * as BookAPI from '../BooksAPI'
import * as Common from '../Common'

class BookItem extends React.Component { 
  constructor(props) {
    super(props);

    // Image url.
    var bookObject = this.props.bookObject;
    const thumbnail = bookObject && bookObject.imageLinks
      ? bookObject.imageLinks.thumbnail
      : '';
    const bookUrl = `url("${thumbnail}")`;

    // Authors.
    const bookAuthors = bookObject.authors
      ? bookObject.authors.join(',')
      : '';

    // Set state.
    this.state = { 
      bookObject: {
        id: bookObject.id,
        bookUrl: bookUrl,
        bookAuthors: bookAuthors,
        bookTitle: bookObject.bookTitle,
        shelf: bookObject.shelf || 'none'
      }
    };
  }

  handleChange(value) {
    if(value !== this.state.bookObject.shelf) {
      // Update data in backend.
      BookAPI.update(this.state.bookObject, value)
        .then(rs => {
          // Update the state.
          console.log('...updating the state');
          const bookObject = this.state.bookObject;
          this.setState({
            bookObject: {
              id: bookObject.id,
              bookUrl: bookObject.bookUrl,
              bookAuthors: bookObject.bookAuthors,
              bookTitle: bookObject.title,
              shelf: value
            }
          });
          console.log('updated the state');

          // Emit event.
          if(this.props.handleUpdate) {
            console.log("...emitting the update event");
            this.props.handleUpdate();
            console.log("emitted the update event")
          } 
        });
    }
  }

  render () {
    const bookObject = this.state.bookObject;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookObject.bookUrl }}></div>
            <div className="book-shelf-changer">
              <select value={bookObject.shelf} onChange={e => this.handleChange(e.target.value)}>
                <option value="move" disabled>Move to...</option>
                {
                  Common.shelves.map(shelf => <option key={shelf.code} value={shelf.code}>{shelf.name}</option>)
                }
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookObject.bookTitle}</div>
          <div className="book-authors">{bookObject.bookAuthors}</div>
        </div>
      </li>
    );
  }
}

BookItem.propTypes = {
  bookObject: PropTypes.object
};

export default BookItem;
