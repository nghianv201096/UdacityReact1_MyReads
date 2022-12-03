import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import BookSearch from './BookSearch/BookSearch'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.refreshData = this.refreshData.bind(this);
  
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  refreshData() {
    this.getData();
  }

  getData = () => {
    BooksAPI.getAll()
      .then((books) => {
        console.log(`app:getting ${books.length} books`);
        this.setState(() => ({
          books
        }));
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList books={this.state.books} onUpdateBook={this.refreshData}></BookList>
        )} />

        <Route path='/search' render={() => (
          <BookSearch books={this.state.books} onUpdateBook={this.refreshData}></BookSearch>
        )} />
      </div>
    )
  }
}

export default BooksApp
