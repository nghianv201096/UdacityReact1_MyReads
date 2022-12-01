import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import BookItem from '../BookItem/BookItem';
//import { Test } from './BookSearch.styles';

class BookSearch extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentWillMount = () => {
    console.log('BookSearch will mount');
  }

  componentDidMount = () => {
    console.log('BookSearch mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('BookSearch will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('BookSearch will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('BookSearch did update');
  }

  componentWillUnmount = () => {
    console.log('BookSearch will unmount');
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
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books.map((bookItem) => 
                <BookItem 
                  bookObject={bookItem}>
                </BookItem>
              )
            }
          </ol>
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  // bla: PropTypes.string,
};

BookSearch.defaultProps = {
  // bla: 'test',
};

export default BookSearch;
