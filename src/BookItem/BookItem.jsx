import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './BookItem.styles';

class BookItem extends React.Component { 
  constructor(props) {
    super(props);

    this.state = { };
  }

  render () {
    // Image url.
    const thumbnail = this.props.bookObject && this.props.bookObject.imageLinks
      ? this.props.bookObject.imageLinks.thumbnail
      : '';
    const bookUrl = `url("${thumbnail}")`;

    // Authors.
    const bookAuthors = this.props.bookObject.authors
      ? this.props.bookObject.authors.join(',')
      : '';

    // Title.
    const bookTitle = this.props.bookObject.title;

    // Shelf.
    const shelf = this.props.bookObject.shelf;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookUrl }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{bookAuthors}</div>
        </div>
      </li>
    );
  }
}

BookItem.propTypes = {
  bookObject: PropTypes.object
};

export default BookItem;
