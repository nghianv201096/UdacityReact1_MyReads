import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookItem from '../BookItem/BookItem';
class BookList extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          bookUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
          bookTitle: "To Kill a Mockingbird",
          bookAuthors: "Harper Lee",
          bookStatus: "wantToRead"
        },
        {
          bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
          bookTitle: "To Kill a Mockingbird",
          bookAuthors: "Harper Lee",
          bookStatus: "wantToRead"
        },
        {
          bookUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
          bookTitle: "To Kill a Mockingbird",
          bookAuthors: "Harper Lee",
          bookStatus: "currentlyReading"
        },
        {
          bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
          bookTitle: "To Kill a Mockingbird",
          bookAuthors: "Harper Lee",
          bookStatus: "currentlyReading"
        },
        {
          bookUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
          bookTitle: "To Kill a Mockingbird",
          bookAuthors: "Harper Lee",
          bookStatus: "read"
        },
        {
          bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
          bookTitle: "To Kill a Mockingbird",
          bookAuthors: "Harper Lee",
          bookStatus: "read"
        }
      ]
    };
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
                        this.state.books.filter((bookItem) => bookItem.bookStatus === bookStatus.code)
                          .map((bookItem) => 
                            <BookItem 
                              bookUrl={bookItem.bookUrl} 
                              bookTitle={bookItem.bookTitle} 
                              bookAuthors={bookItem.bookAuthors}>
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
