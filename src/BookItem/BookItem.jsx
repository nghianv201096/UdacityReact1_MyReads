import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './BookItem.styles';

class BookItem extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    const bookUrl = `url("${this.props.bookUrl}")`;
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
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthors}</div>
        </div>
      </li>
    );
  }
}

BookItem.propTypes = {
  bookUrl: PropTypes.string,
  bookTitle: PropTypes.string,
  bookAuthors: PropTypes.string
};

BookItem.defaultProps = {
  bookUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
  bookTitle: 'no title',
  bookAuthors: 'no authors'
};

export default BookItem;
